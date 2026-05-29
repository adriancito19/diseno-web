CREATE DATABASE IF NOT EXISTS techstore
	CHARACTER SET utf8mb4 	-- ESTANDAR PARA LA ACEPTACION DE CARACTERES(TILDES, ETC)
    COLLATE utf8mb4_unicode_ci;  -- CASE INSENSITIVE (IGNORA MAYUSCULAS Y MINUSCULAS)
    
USE techstore;
------------------------------------------------------------------------------------------------------------------------
-- TABLA CATEGORIAS 
-- AGRUPA LOS PRODUCTOS POR TIPO
CREATE TABLE categorias (
id_categoria  INT   NOT NULL  AUTO_INCREMENT,
nombre  VARCHAR(100)  NOT NULL,
descripcion  TEXT,
PRIMARY KEY (id_categoria)
);

------------------------------------------------------------------------------------------------------------------------
-- TABLA USUARIOS
-- ALMACENA CLIENTES Y ADMINS EN UNA SOLA TABLA
-- tipo_usuario DISTINGUE EL ROL DENTRO DEL SISTEMA(OSEA EN EL BACKEND)
CREATE TABLE usuarios (
id_usuario   INT NOT NULL AUTO_INCREMENT,
nombre  	VARCHAR(150)	NOT NULL,
correo		VARCHAR(150)	NOT NULL,
contraseña_hash		VARCHAR(200)	NOT NULL, -- (SIEMPRE DEBE ESTAR ENCRIPTADA, USAR LIBRERIA bcrypt)
tipo_usuario	ENUM('cliente', 'admin'), -- DEPENDIENDO DE LO QUE SE REGISTRE EN EL BACK, DEVUELVE UNA U OTRA COSA
fecha_registro		DATETIME	NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id_usuario), 
UNIQUE KEY uq_correo (correo) -- RESTRINGE LOS CORREOS REPETIDOS(CREO XD)
);
----------------------------------------------------------------------------------------------------------------------

-- TABLA PRODUCTO
-- ALMACENARA EL CATALOGO COMPLETO DE LA TIENDA
-- EL STOCK SE SUPONE QUE SE DEBE ACTUALIZAR AUTOMATICAMENTE AL CONFIRMAR LOS PEDIDOS (EN EL TRIGGER)
CREATE TABLE productos(
id_producto INT		NOT NULL AUTO_INCREMENT,
nombre 		VARCHAR(100)	NOT NULL,
descripcion		TEXT,
precio 		DECIMAL(10,2)	NOT NULL,
stock	INT		NOT NULL DEFAULT 0,
imagen_url		VARCHAR(500),
id_categoria	INT		NOT NULL,
fecha_creacion	DATETIME	NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id_producto),
CONSTRAINT fk_producto_categoria
	FOREIGN KEY(id_categoria) REFERENCES categorias (id_categoria)
    ON UPDATE CASCADE -- SI EL id_categoria CAMBIA, EL CAMBIO SE PROPAGA A LA TABLA PRODUCTOS
    ON DELETE RESTRICT	-- RESTRINGE EL ELIMINAR UNA CATEGORIA QUE CONTENGA PRODUCTOS
);
--------------------------------------------------------------------------------------------------------------------------------------

-- TABLA CARRITO
-- CADA USU TIENE UN CARRITO ACTIVO
CREATE TABLE carrito (
 id_carrito		INT 	NOT NULL AUTO_INCREMENT,
 id_usuario		INT 	NOT NULL,
 fecha_creacion		DATETIME NOT NULL	DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (id_carrito),
 UNIQUE KEY uq_usuario_carrito	(id_usuario),		-- CARRITO UNICO POR USUARIO
 FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario)
 ON DELETE CASCADE
 );

--------------------------------------------------------------------------------------------------------------------------
-- TABLA CARRITO_ITEMS
-- LOS PRODUCTOS DENTRO DEL CARRITO CON SU CANTIDAD
-- AGREGAR, ELIMINAR Y MODIFICAR CANTIDADES
CREATE TABLE carrito_items(
id_item		INT		NOT NULL	AUTO_INCREMENT,
id_carrito	INT		NOT NULL,
id_producto	INT		NOT NULL,
cantidad	INT		NOT NULL	DEFAULT 1,
PRIMARY KEY (id_item),
UNIQUE KEY uq_carrito_producto (id_carrito, id_producto), -- NO PUEDE HABER PRODRUCTOS DUPLICADOS
CONSTRAINT fk_item_carrito
	FOREIGN KEY (id_producto) REFERENCES carrito (id_carrito)
    ON DELETE CASCADE, -- BORRA TODO EL CARRITO(OPUESTO A ON DELETE RESTRICT)

 CONSTRAINT fk_item_producto_carrito
	FOREIGN KEY (id_producto)  REFERENCES producto (id_producto)
    ON DELETE CASCADE,

CONSTRAINT chk_cantidad_carrito CHECK(cantidad > 0)
);

--------------------------------------------------------------------------------------------------------------------------

-- TABLA PEDIDOS
-- REGISTRA CADA COMPRA CONFIRMADA POR EL USUARIO
-- CONFIRMAR PEDIDOS Y ALMACENARLOS
CREATE TABLE pedidos (
id_pedido INT 	NOT NULL AUTO_INCREMENT,
id_usuario INT 	NOT NULL,
fecha_pedido	DATETIME 	NOT NULL DEFAULT CURRENT_TIMESTAMP,
estado_pedido 	ENUM(
				'pendiente',
                'procesando',
                'enviado',
                'entregado',
				'cancelado') NOT NULL 	DEFAULT 'pendiente',
total	DECIMAL(10,2)	NOT NULL,
PRIMARY KEY (id_pedido),
CONSTRAINT fk_pedido_usuario
	FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
    ON DELETE RESTRICT 			-- RESTRINGE BORRAR USUARIOS CON PEDIDOS
);

----------------------------------------------------------------------------------------------------------------------------
  
-- TABLA PEDIDOS_ITEMS
-- DETALLE DE PRODUCTOS POR PEDIDO
-- precio_unitario GUARDA EL PRECIO AL MOMENTO DE LA COMPRA
CREATE TABLE pedidos_items (
id_item		INT		NOT NULL AUTO_INCREMENT,
id_pedido	INT 	NOT NULL,
id_producto	INT 	NOT NULL,
cantidad	INT		NOT NULL,
precio_unitario 	DECIMAL(10,2)	NOT NULL,		-- PRECIO FIJO AL COMPRAR
PRIMARY KEY (id_item),
CONSTRAINT fk_pitem_pedido
	FOREIGN KEY (id_pedido)		REFERENCES pedidos (id_pedido)
    ON DELETE CASCADE,
CONSTRAINT fk_pitem_producto
	FOREIGN KEY (id_producto)	REFERENCES productos (id_producto)
    ON DELETE RESTRICT,  -- NO SE PUEDE ELIMINAR UN PEDIDO\PRODUCTO QUE YA HA SIDO COMPRADO ALGUNA VEZ
CONSTRAINT chk_cantidad_pedido CHECK (cantidad > 0)
);


-----------------------------------------------------------------------------------------------------------------------------

-- INDICES - E UN INDICE NORMAL XD, ASI SIN MAS (HACE QUE LAS QUERYS Y LAS BUSQUEDAS SEAN MAS RAPIDAS)
CREATE INDEX idx_productos_nombre	ON productos (nombre);
CREATE INDEX idx_productos_categoria	ON productos (id_categoria);
CREATE INDEX idx_pedidos_usuario	ON pedidos (id_usuario);
CREATE INDEX idx_pedidos_estado		ON pedidos (estado);

--------------------------------------------------------------------------------------------------------------------------

-- DATOS INICIALES - DATOS QUE ENTRARAN EN AUTOMATICO AL EJECUTAR LA BD

INSERT INTO categorias  (nombre, descripcion) VALUES
 ('PCs', 'Computadoras de escritorio y torres'),
  ('Laptops',  'Portátiles y ultrabooks'),
  ('Periféricos',  'Teclados, ratones, monitores, audífonos'),
  ('Accesorios',   'Cables, hubs, fundas y más');
  
--------------------------------------------------------------------------------------------------------------------------------
-- CONTRASEÑA DE EJEMPLO: "Admin1234!"
-- DEBE ENCRIPTARSE CON bcrypt DESDE EL BACKEND, NO SE DEBE INSERTAR TEXTO PLANO

INSERT INTO usuarios (nombre, correo, contraseña_hash, tipo_usuario) 	VALUES
('Administrador', 'admin@techstore.com',
   '$2b$10$', 'admin');
   
DELIMITER $$

CREATE TRIGGER trg_descontar_stock
AFTER INSERT ON pedido_items
FOR EACH ROW
BEGIN
	UPDATE productos
    SET stock = stock - NEW.cantidad
    WHERE id_producto = NEW.id_producto;
END $$

DELIMITER ;
   
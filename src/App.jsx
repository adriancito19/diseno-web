import { useState, useMemo, useEffect } from 'react';
import './App.css';

// Constants
import { INITIAL_PRODUCTS, BUILDER_OPTIONS, COMPONENT_PRODUCTS } from './constants/products';

// Components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Catalog from './components/Catalog/Catalog';
import ProductDetail from './components/Catalog/ProductDetail';
import PCBuilder from './components/PCBuilder/PCBuilder';
import Footer from './components/Footer/Footer';
import Advantages from './components/Advantages/Advantages';
import CartModal from './components/Modals/CartModal';
import LoginModal from './components/Modals/LoginModal';
import Contact from './components/Contact/Contact';

function App() {
  // Main view state
  const [activeView, setActiveView] = useState('home');

  // Product modal state
  const [modalProduct, setModalProduct] = useState(null);

  const viewProductDetail = (product) => {
    setModalProduct(product);
    setActiveView('product-detail');
    window.scrollTo(0, 0);
  };

  const closeProductDetail = () => {
    setActiveView('catalog');
    setModalProduct(null);
    window.scrollTo(0, 0);
  };

  // Store states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // PC Builder State
  const [builderConfig, setBuilderConfig] = useState({
    cpu: BUILDER_OPTIONS.cpu[0],
    gpu: BUILDER_OPTIONS.gpu[2],
    ram: BUILDER_OPTIONS.ram[1],
    ssd: BUILDER_OPTIONS.ssd[0],
    gabinete: BUILDER_OPTIONS.gabinete[0]
  });

  // Filtered products list
  const products = useMemo(() => {
    const allAvailable = [...INITIAL_PRODUCTS, ...COMPONENT_PRODUCTS];
    let filtered = allAvailable;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.specs.some((spec) => spec.toLowerCase().includes(query))
      );
    }
    return filtered;
  }, [searchQuery, selectedCategory]);

  // Cart operations
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id && !item.isCustom);
      if (existing) {
        return prevCart.map(item => 
          (item.id === product.id && !item.isCustom) ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
  };

  const updateCartQuantity = (itemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prevCart) => prevCart.map(item => 
      item.id === itemId ? { ...item, quantity: newQty } : item
    ));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const addCustomPcToCart = () => {
    const totalPrice = builderConfig.cpu.price + 
                        builderConfig.gpu.price + 
                        builderConfig.ram.price + 
                        builderConfig.ssd.price + 
                        builderConfig.gabinete.price;

    const customPcProduct = {
      id: Date.now(),
      name: `Nova Custom PC (${builderConfig.gabinete.id === 'ice' ? 'Ice White' : 'Midnight Black'})`,
      price: totalPrice,
      isCustom: true,
      specs: [
        builderConfig.cpu.name,
        builderConfig.gpu.name,
        builderConfig.ram.name,
        builderConfig.ssd.name,
        builderConfig.gabinete.name
      ],
      image: builderConfig.gabinete.id === 'ice' ? '/images/pc_2_1779304486929.png' : '/images/pc_1_1779304111464.png',
      quantity: 1
    };

    setCart((prevCart) => [...prevCart, customPcProduct]);
    setIsCartOpen(true);
  };

  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginEmail.trim() !== '') {
      setUser({ email: loginEmail });
      setIsLoginOpen(false);
      setLoginEmail('');
      setLoginPassword('');
    }
  };

  return (
    <div className="app-container">
      <Navbar 
        activeView={activeView}
        setActiveView={setActiveView}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSelectedCategory={setSelectedCategory}
        user={user}
        setUser={setUser}
        setIsLoginOpen={setIsLoginOpen}
        setIsCartOpen={setIsCartOpen}
        cartCount={getCartCount()}
      />

      <main className="main-content-flow">
        {activeView === 'home' && (
          <>
            <Hero 
              setActiveView={setActiveView}
              setSelectedCategory={setSelectedCategory}
              setSearchQuery={setSearchQuery}
            />
            <Advantages />
            <Catalog 
              products={products.filter(p => !p.isComponent).slice(0, 3)} 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onProductClick={viewProductDetail}
              onAddToCart={addToCart}
            />
          </>
        )}

        {activeView === 'catalog' && (
          <Catalog 
            products={products}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onProductClick={viewProductDetail}
            onAddToCart={addToCart}
          />
        )}

        {activeView === 'product-detail' && (
          <ProductDetail 
            modalProduct={modalProduct}
            closeProductDetail={closeProductDetail}
            addToCart={addToCart}
            viewProductDetail={viewProductDetail}
          />
        )}

        {activeView === 'builder' && (
          <PCBuilder 
            builderConfig={builderConfig}
            setBuilderConfig={setBuilderConfig}
            addCustomPcToCart={addCustomPcToCart}
          />
        )}

        {activeView === 'contact' && (
          <Contact setActiveView={setActiveView} />
        )}
      </main>

      <Footer 
        setActiveView={setActiveView}
        setSelectedCategory={setSelectedCategory}
      />

      <CartModal 
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        setCart={setCart}
        updateCartQuantity={updateCartQuantity}
        removeFromCart={removeFromCart}
        getCartTotal={getCartTotal}
        getCartCount={getCartCount}
        setActiveView={setActiveView}
      />

      <LoginModal 
        isLoginOpen={isLoginOpen}
        setIsLoginOpen={setIsLoginOpen}
        handleLogin={handleLogin}
        loginEmail={loginEmail}
        setLoginEmail={setLoginEmail}
        loginPassword={loginPassword}
        setLoginPassword={setLoginPassword}
      />
    </div>
  );
}

export default App;

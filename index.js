const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Main route
app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elegance Jewellery | Luxury Women's Jewelry</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-color: #d4af37;
            --primary-dark: #b8960c;
            --dark-color: #1a1a1a;
            --light-color: #faf8f4;
            --text-color: #333;
            --white: #ffffff;
            --gold-gradient: linear-gradient(135deg, #d4af37 0%, #f3e5ab 50%, #d4af37 100%);
            --shadow-sm: 0 2px 10px rgba(0,0,0,0.05);
            --shadow-md: 0 5px 20px rgba(0,0,0,0.1);
            --shadow-lg: 0 10px 40px rgba(0,0,0,0.15);
            --shadow-gold: 0 5px 20px rgba(212, 175, 55, 0.2);
            --transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        body {
            font-family: 'Poppins', sans-serif;
            color: var(--text-color);
            line-height: 1.6;
            overflow-x: hidden;
            background: var(--light-color);
        }

        h1, h2, h3, h4 {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Navigation */
        .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
            transition: var(--transition);
        }

        .navbar.scrolled {
            background: var(--white);
            box-shadow: var(--shadow-md);
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo h1 {
            font-size: 1.8rem;
            background: var(--gold-gradient);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        .logo i {
            color: var(--primary-color);
            margin-right: 8px;
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-link {
            text-decoration: none;
            color: var(--dark-color);
            font-weight: 500;
            transition: var(--transition);
            position: relative;
        }

        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--gold-gradient);
            transition: var(--transition);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
            width: 100%;
        }

        .nav-icons {
            display: flex;
            gap: 1.5rem;
            font-size: 1.2rem;
            cursor: pointer;
            position: relative;
        }

        .nav-icons i {
            transition: var(--transition);
        }

        .nav-icons i:hover {
            color: var(--primary-color);
            transform: scale(1.1);
        }

        .cart-count {
            position: absolute;
            top: -8px;
            right: -12px;
            background: var(--primary-color);
            color: white;
            font-size: 0.7rem;
            padding: 2px 6px;
            border-radius: 50%;
            font-weight: 600;
        }

        .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
        }

        .hamburger span {
            width: 25px;
            height: 3px;
            background: var(--dark-color);
            margin: 3px 0;
            transition: var(--transition);
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            background: linear-gradient(135deg, #fff5e8 0%, #ffffff 100%);
            padding-top: 80px;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%);
            animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.8; }
        }

        .hero-content {
            flex: 1;
            padding: 0 5%;
            z-index: 1;
        }

        .hero-subtitle {
            font-size: 1.2rem;
            color: var(--primary-color);
            letter-spacing: 3px;
            margin-bottom: 1rem;
            display: inline-block;
        }

        .hero-content h1 {
            font-size: 4rem;
            color: var(--dark-color);
            margin-bottom: 1.5rem;
            line-height: 1.2;
        }

        .hero-content p {
            font-size: 1.1rem;
            margin-bottom: 2rem;
            max-width: 500px;
        }

        .hero-image {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .hero-bg {
            width: 400px;
            height: 400px;
            background: var(--gold-gradient);
            border-radius: 50%;
            animation: float 3s ease-in-out infinite;
            position: relative;
            box-shadow: var(--shadow-gold);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 8rem;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }

        /* Buttons */
        .btn {
            padding: 14px 35px;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            transition: var(--transition);
            font-family: 'Poppins', sans-serif;
            border-radius: 50px;
        }

        .btn-primary {
            background: var(--gold-gradient);
            color: var(--dark-color);
            box-shadow: var(--shadow-gold);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
        }

        /* Features */
        .features {
            padding: 80px 0;
            background: var(--white);
        }

        .features .container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        .feature-card {
            text-align: center;
            padding: 2rem;
            transition: var(--transition);
            border-radius: 15px;
            background: var(--white);
            box-shadow: var(--shadow-sm);
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-md);
        }

        .feature-card i {
            font-size: 3rem;
            background: var(--gold-gradient);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            margin-bottom: 1rem;
        }

        /* Products */
        .products {
            padding: 80px 0;
            background: var(--light-color);
        }

        .section-header {
            text-align: center;
            margin-bottom: 3rem;
        }

        .section-subtitle {
            color: var(--primary-color);
            text-transform: uppercase;
            letter-spacing: 3px;
            font-size: 0.9rem;
        }

        .section-header h2 {
            font-size: 3rem;
            margin: 1rem 0;
            background: linear-gradient(135deg, var(--dark-color), var(--primary-color));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .product-card {
            background: var(--white);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: var(--shadow-sm);
            transition: var(--transition);
            cursor: pointer;
        }

        .product-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-lg);
        }

        .product-image {
            height: 350px;
            background-size: cover;
            background-position: center;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
        }

        .product-badge {
            position: absolute;
            top: 15px;
            right: 15px;
            background: var(--gold-gradient);
            color: var(--dark-color);
            padding: 5px 12px;
            border-radius: 50px;
            font-size: 0.8rem;
            font-weight: 600;
            z-index: 1;
        }

        .product-info {
            padding: 1.5rem;
            text-align: center;
        }

        .product-info h3 {
            margin-bottom: 0.5rem;
        }

        .product-category {
            color: var(--primary-color);
            font-size: 0.8rem;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
        }

        .product-price {
            color: var(--primary-color);
            font-size: 1.3rem;
            font-weight: 700;
            margin: 0.5rem 0;
        }

        .original-price {
            text-decoration: line-through;
            color: #999;
            font-size: 0.9rem;
            margin-left: 10px;
        }

        .add-to-cart {
            width: 100%;
            margin-top: 1rem;
            background: var(--dark-color);
            color: var(--white);
        }

        .add-to-cart:hover {
            background: var(--primary-color);
            color: var(--dark-color);
        }

        /* Cart Modal */
        .cart-modal {
            display: none;
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1001;
        }

        .cart-content {
            position: fixed;
            right: -100%;
            top: 0;
            width: 450px;
            height: 100%;
            background: var(--white);
            box-shadow: -5px 0 20px rgba(0,0,0,0.1);
            transition: var(--transition);
            display: flex;
            flex-direction: column;
        }

        .cart-modal.show .cart-content {
            right: 0;
        }

        .cart-header {
            padding: 1.5rem;
            border-bottom: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .close-cart {
            font-size: 2rem;
            cursor: pointer;
        }

        .cart-items {
            flex: 1;
            padding: 1.5rem;
            overflow-y: auto;
        }

        .cart-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            padding: 1rem;
            background: #f9f9f9;
            border-radius: 10px;
        }

        .cart-item-controls {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .quantity-btn {
            background: var(--primary-color);
            color: var(--dark-color);
            border: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            cursor: pointer;
            font-weight: bold;
        }

        .remove-item {
            background: none;
            border: none;
            color: #ff4444;
            cursor: pointer;
            font-size: 1.2rem;
        }

        .cart-footer {
            padding: 1.5rem;
            border-top: 1px solid #ddd;
        }

        .cart-total {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 1rem;
            display: flex;
            justify-content: space-between;
        }

        /* About Section */
        .about {
            padding: 80px 0;
            background: var(--white);
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
        }

        .about-text h2 {
            font-size: 3rem;
            margin: 1rem 0;
        }

        .about-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin-top: 2rem;
        }

        .stat {
            text-align: center;
            padding: 1rem;
            background: linear-gradient(135deg, #fff5e8, #ffffff);
            border-radius: 15px;
        }

        .stat h3 {
            font-size: 2rem;
            color: var(--primary-color);
        }

        .about-image {
            height: 500px;
            background: linear-gradient(135deg, #d4af37, #f3e5ab);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 6rem;
            box-shadow: var(--shadow-lg);
        }

        /* Newsletter */
        .newsletter {
            padding: 80px 0;
            background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
            color: var(--white);
        }

        .newsletter-content {
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
        }

        .newsletter-content h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .newsletter form {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }

        .newsletter input {
            flex: 1;
            padding: 14px 20px;
            border: none;
            border-radius: 50px;
            font-family: 'Poppins', sans-serif;
        }

        /* Footer */
        .footer {
            background: var(--dark-color);
            color: var(--white);
            padding: 60px 0 20px;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .footer-section h3, .footer-section h4 {
            margin-bottom: 1rem;
        }

        .footer-section ul {
            list-style: none;
        }

        .footer-section ul li {
            margin-bottom: 0.5rem;
        }

        .footer-section a {
            color: var(--white);
            text-decoration: none;
        }

        .footer-section a:hover {
            color: var(--primary-color);
        }

        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }

        .social-links a {
            font-size: 1.3rem;
        }

        .payment-icons {
            font-size: 2rem;
            display: flex;
            gap: 1rem;
        }

        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255,255,255,0.1);
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hamburger {
                display: flex;
            }
            
            .nav-menu {
                position: fixed;
                left: -100%;
                top: 70px;
                flex-direction: column;
                background: var(--white);
                width: 100%;
                text-align: center;
                padding: 2rem;
                transition: var(--transition);
            }
            
            .nav-menu.active {
                left: 0;
            }
            
            .hero {
                flex-direction: column;
                text-align: center;
            }
            
            .hero-content h1 {
                font-size: 2.5rem;
            }
            
            .about-content {
                grid-template-columns: 1fr;
            }
            
            .newsletter form {
                flex-direction: column;
            }
            
            .cart-content {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <h1><i class="fas fa-gem"></i> Kowsi's Elegance</h1>
            </div>
            <ul class="nav-menu">
                <li><a href="#home" class="nav-link active">Home</a></li>
                <li><a href="#products" class="nav-link">Collections</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            <div class="nav-icons">
                <i class="fas fa-search"></i>
                <i class="fas fa-heart"></i>
                <i class="fas fa-shopping-bag cart-icon"></i>
                <span class="cart-count">0</span>
            </div>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <section id="home" class="hero">
        <div class="hero-content">
            <span class="hero-subtitle">Timeless Elegance</span>
            <h1>Discover Your<br>Perfect Piece</h1>
            <p>Explore our exquisite collection of handcrafted jewellery designed to celebrate your unique beauty</p>
            <button class="btn btn-primary" onclick="scrollToProducts()">Shop Now</button>
        </div>
        <div class="hero-image">
            <div class="hero-bg">💎</div>
        </div>
    </section>

    <section class="features">
        <div class="container">
            <div class="feature-card">
                <i class="fas fa-truck"></i>
                <h3>Free Shipping</h3>
                <p>On orders over $100</p>
            </div>
            <div class="feature-card">
                <i class="fas fa-undo-alt"></i>
                <h3>30-Day Returns</h3>
                <p>Hassle-free returns</p>
            </div>
            <div class="feature-card">
                <i class="fas fa-gem"></i>
                <h3>Premium Quality</h3>
                <p>Certified materials</p>
            </div>
            <div class="feature-card">
                <i class="fas fa-lock"></i>
                <h3>Secure Payment</h3>
                <p>100% secure checkout</p>
            </div>
        </div>
    </section>

    <section id="products" class="products">
        <div class="container">
            <div class="section-header">
                <span class="section-subtitle">Our Collections</span>
                <h2>Best Selling Jewellery</h2>
                <p>Each piece tells a unique story of craftsmanship and elegance</p>
            </div>
            <div class="product-grid" id="productGrid"></div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <span class="section-subtitle">Our Story</span>
                    <h2>Crafting Elegance Since 2010</h2>
                    <p>At Elegance Jewellery, we believe that every woman deserves to feel special. Our pieces are carefully crafted by master artisans who pour their heart and soul into every detail.</p>
                    <p>We use only the finest materials - from ethically sourced gemstones to premium metals.</p>
                    <div class="about-stats">
                        <div class="stat">
                            <h3>5000+</h3>
                            <p>Happy Customers</p>
                        </div>
                        <div class="stat">
                            <h3>1000+</h3>
                            <p>Unique Designs</p>
                        </div>
                        <div class="stat">
                            <h3>15+</h3>
                            <p>Design Awards</p>
                        </div>
                    </div>
                </div>
                <div class="about-image">
                    ✨
                </div>
            </div>
        </div>
    </section>

    <section class="newsletter">
        <div class="container">
            <div class="newsletter-content">
                <h2>Subscribe to Our Newsletter</h2>
                <p>Get exclusive offers, new collection updates, and jewellery care tips</p>
                <form id="newsletterForm">
                    <input type="email" placeholder="Enter your email address" required>
                    <button type="submit" class="btn btn-primary">Subscribe</button>
                </form>
            </div>
        </div>
    </section>

    <section id="contact" class="contact" style="padding: 80px 0; background: var(--light-color);">
        <div class="container">
            <div class="section-header">
                <span class="section-subtitle">Get In Touch</span>
                <h2>Contact Us</h2>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
                <div>
                    <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
                        <i class="fas fa-map-marker-alt" style="font-size: 1.5rem; color: var(--primary-color);"></i>
                        <div>
                            <h4>Visit Us</h4>
                            <p>123 Fashion Avenue, New York, NY 10001</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
                        <i class="fas fa-phone" style="font-size: 1.5rem; color: var(--primary-color);"></i>
                        <div>
                            <h4>Call Us</h4>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
                        <i class="fas fa-envelope" style="font-size: 1.5rem; color: var(--primary-color);"></i>
                        <div>
                            <h4>Email Us</h4>
                            <p>hello@elegancejewellery.com</p>
                        </div>
                    </div>
                </div>
                <form id="contactForm">
                    <input type="text" placeholder="Your Name" required style="width: 100%; padding: 12px; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 5px;">
                    <input type="email" placeholder="Your Email" required style="width: 100%; padding: 12px; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 5px;">
                    <textarea rows="5" placeholder="Your Message" required style="width: 100%; padding: 12px; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 5px;"></textarea>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3><i class="fas fa-gem"></i> Elegance</h3>
                    <p>Timeless jewellery for the modern woman</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-pinterest"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Collections</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Customer Care</h4>
                    <ul>
                        <li><a href="#">Shipping Info</a></li>
                        <li><a href="#">Returns & Exchanges</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Payment Methods</h4>
                    <div class="payment-icons">
                        <i class="fab fa-cc-visa"></i>
                        <i class="fab fa-cc-mastercard"></i>
                        <i class="fab fa-cc-amex"></i>
                        <i class="fab fa-cc-paypal"></i>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Elegance Jewellery. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <div class="cart-modal" id="cartModal">
        <div class="cart-content">
            <div class="cart-header">
                <h2>Shopping Cart</h2>
                <span class="close-cart">&times;</span>
            </div>
            <div class="cart-items" id="cartItems">
                <p>Your cart is empty</p>
            </div>
            <div class="cart-footer">
                <div class="cart-total">
                    <span>Total:</span>
                    <span id="cartTotal">$0.00</span>
                </div>
                <button class="btn btn-primary" onclick="checkout()">Checkout</button>
            </div>
        </div>
    </div>

    <script>
        const products = [
            { id: 1, name: "Eternal Diamond Necklace", price: 299, originalPrice: 499, category: "Necklaces", emoji: "💎", badge: "Best Seller" },
            { id: 2, name: "Pearl Elegance Earrings", price: 149, originalPrice: 249, category: "Earrings", emoji: "🦪", badge: "Trending" },
            { id: 3, name: "Royal Gold Bangle Set", price: 399, originalPrice: 599, category: "Bracelets", emoji: "✨", badge: "Limited" },
            { id: 4, name: "Sapphire Dream Ring", price: 449, originalPrice: 699, category: "Rings", emoji: "💍", badge: "Premium" },
            { id: 5, name: "Silver Cascade Necklace", price: 199, originalPrice: 329, category: "Necklaces", emoji: "🔗", badge: "" },
            { id: 6, name: "Emerald Majesty Studs", price: 259, originalPrice: 389, category: "Earrings", emoji: "💚", badge: "New" },
            { id: 7, name: "Diamond Tennis Bracelet", price: 599, originalPrice: 899, category: "Bracelets", emoji: "💎", badge: "Luxury" },
            { id: 8, name: "Rose Gold Blossom Ring", price: 349, originalPrice: 529, category: "Rings", emoji: "🌹", badge: "Romantic" }
        ];

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        function displayProducts() {
            const productGrid = document.getElementById('productGrid');
            if (!productGrid) return;
            
            productGrid.innerHTML = products.map(product => \`
                <div class="product-card">
                    \${product.badge ? \`<div class="product-badge">\${product.badge}</div>\` : ''}
                    <div class="product-image" style="background: linear-gradient(135deg, #e8d5b5, #d4b896);">
                        \${product.emoji}
                    </div>
                    <div class="product-info">
                        <div class="product-category">\${product.category}</div>
                        <h3>\${product.name}</h3>
                        <div class="product-price">
                            $\${product.price}
                            \${product.originalPrice ? \`<span class="original-price">$\${product.originalPrice}</span>\` : ''}
                        </div>
                        <button class="btn add-to-cart" onclick="addToCart(\${product.id})">
                            <i class="fas fa-shopping-bag"></i> Add to Cart
                        </button>
                    </div>
                </div>
            \`).join('');
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            updateCart();
            showNotification(\`\${product.name} added to cart!\`);
        }

        function updateCart() {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            displayCartItems();
        }

        function updateCartCount() {
            const count = cart.reduce((sum, item) => sum + item.quantity, 0);
            const cartCountElements = document.querySelectorAll('.cart-count');
            cartCountElements.forEach(el => {
                el.textContent = count;
                el.style.display = count > 0 ? 'block' : 'none';
            });
        }

        function displayCartItems() {
            const cartItemsContainer = document.getElementById('cartItems');
            if (!cartItemsContainer) return;
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<div style="text-align: center; padding: 2rem;"><i class="fas fa-shopping-bag" style="font-size: 3rem; color: #ddd;"></i><p style="margin-top: 1rem;">Your cart is empty</p></div>';
                document.getElementById('cartTotal').textContent = '$0.00';
                return;
            }
            
            cartItemsContainer.innerHTML = cart.map(item => \`
                <div class="cart-item">
                    <div style="flex: 1;">
                        <h4>\${item.name}</h4>
                        <p style="color: var(--primary-color); font-weight: 600;">$\${item.price}</p>
                    </div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(\${item.id}, \${item.quantity - 1})">-</button>
                        <span style="margin: 0 10px; font-weight: 600;">\${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(\${item.id}, \${item.quantity + 1})">+</button>
                        <button class="remove-item" onclick="removeFromCart(\${item.id})">🗑️</button>
                    </div>
                </div>
            \`).join('');
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            document.getElementById('cartTotal').textContent = \`$\${total.toFixed(2)}\`;
        }

        function updateQuantity(productId, newQuantity) {
            if (newQuantity <= 0) {
                removeFromCart(productId);
            } else {
                const item = cart.find(item => item.id === productId);
                if (item) item.quantity = newQuantity;
                updateCart();
            }
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
            showNotification('Item removed from cart');
        }

        function checkout() {
            if (cart.length === 0) {
                showNotification('Your cart is empty!', 'error');
                return;
            }
            
            alert('Thank you for your purchase! This is a demo store.');
            cart = [];
            updateCart();
            closeCartModal();
            showNotification('Order placed successfully!');
        }

        function showNotification(message, type = 'success') {
            const notification = document.createElement('div');
            notification.textContent = message;
            notification.style.cssText = \`
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: \${type === 'error' ? '#f44336' : '#4caf50'};
                color: white;
                padding: 15px 25px;
                border-radius: 5px;
                z-index: 1002;
                animation: slideIn 0.3s ease;
            \`;
            
            document.body.appendChild(notification);
            setTimeout(() => notification.remove(), 3000);
        }

        function openCartModal() {
            const modal = document.getElementById('cartModal');
            if (modal) {
                modal.style.display = 'block';
                setTimeout(() => modal.classList.add('show'), 10);
                displayCartItems();
            }
        }

        function closeCartModal() {
            const modal = document.getElementById('cartModal');
            if (modal) {
                modal.classList.remove('show');
                setTimeout(() => modal.style.display = 'none', 300);
            }
        }

        function scrollToProducts() {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        }

        // Event Listeners
        document.addEventListener('DOMContentLoaded', () => {
            displayProducts();
            updateCartCount();
            
            document.querySelector('.cart-icon').addEventListener('click', openCartModal);
            document.querySelector('.close-cart').addEventListener('click', closeCartModal);
            document.getElementById('cartModal').addEventListener('click', (e) => {
                if (e.target === document.getElementById('cartModal')) closeCartModal();
            });
            
            document.getElementById('newsletterForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const email = e.target.querySelector('input').value;
                showNotification(\`Thanks for subscribing with \${email}!\`);
                e.target.reset();
            });
            
            document.getElementById('contactForm').addEventListener('submit', (e) => {
                e.preventDefault();
                showNotification('Message sent successfully!');
                e.target.reset();
            });
            
            // Navbar scroll effect
            window.addEventListener('scroll', () => {
                document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 50);
            });
            
            // Mobile menu
            document.querySelector('.hamburger').addEventListener('click', () => {
                document.querySelector('.nav-menu').classList.toggle('active');
            });
        });
        
        const style = document.createElement('style');
        style.textContent = \`
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        \`;
        document.head.appendChild(style);
    </script>
</body>
</html>
    `);
});

app.listen(PORT, () => {
    console.log(`✨ Elegance Jewellery Store is running!`);
    console.log(`📍 Visit: http://localhost:${PORT}`);
    console.log(`🚀 Press Ctrl+C to stop the server`);
});

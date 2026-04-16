// Carousel/Slider Management
class Carousel {
  constructor(gridSelector) {
    this.grid = document.querySelector(gridSelector);
    if (!this.grid) return;
    this.currentIndex = 0;
    this.itemsPerView = this.getItemsPerView();
    this.totalItems = this.grid.children.length;
    this.init();
  }

  getItemsPerView() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 991) return 2;
    return 4;
  }

  init() {
    this.createControls();
    this.attachEventListeners();
    this.updateScroll();
    window.addEventListener("resize", () => {
      this.itemsPerView = this.getItemsPerView();
      this.updateScroll();
    });
  }

  createControls() {
    const container = this.grid.parentElement;
    const controlsDiv = document.createElement("div");
    controlsDiv.className = "carousel-controls";
    controlsDiv.innerHTML = `
      <button class="carousel-prev" aria-label="Previous">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button class="carousel-next" aria-label="Next">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    `;
    container.appendChild(controlsDiv);
    this.prevBtn = controlsDiv.querySelector(".carousel-prev");
    this.nextBtn = controlsDiv.querySelector(".carousel-next");
  }

  attachEventListeners() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => this.prev());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => this.next());
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateScroll();
    }
  }

  next() {
    const maxIndex = Math.max(0, this.totalItems - this.itemsPerView);
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
      this.updateScroll();
    }
  }

  updateScroll() {
    const itemWidth = 100 / this.itemsPerView;
    this.grid.style.transform = `translateX(-${this.currentIndex * itemWidth}%)`;
    this.updateButtonStates();
  }

  updateButtonStates() {
    const maxIndex = Math.max(0, this.totalItems - this.itemsPerView);
    if (this.prevBtn) {
      this.prevBtn.disabled = this.currentIndex === 0;
    }
    if (this.nextBtn) {
      this.nextBtn.disabled = this.currentIndex >= maxIndex;
    }
  }
}

// Cart Management
class CartManager {
  constructor() {
    this.cartKey = "umino_cart";
    this.init();
  }

  init() {
    this.attachAddToCartListeners();
    this.updateCartCount();
  }

  getCart() {
    const cart = localStorage.getItem(this.cartKey);
    return cart ? JSON.parse(cart) : [];
  }

  saveCart(cart) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
    this.updateCartCount();
  }

  addToCart(product) {
    const cart = this.getCart();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }

    this.saveCart(cart);
    this.showNotification("Added to cart!");
  }

  removeFromCart(productId) {
    let cart = this.getCart();
    cart = cart.filter(item => item.id !== productId);
    this.saveCart(cart);
  }

  updateQuantity(productId, quantity) {
    const cart = this.getCart();
    const item = cart.find(item => item.id === productId);
    if (item) {
      item.quantity = Math.max(1, parseInt(quantity));
      this.saveCart(cart);
    }
  }

  updateCartCount() {
    const cart = this.getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
      cartCountElement.textContent = totalItems;
    }
  }

  attachAddToCartListeners() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    addToCartButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const productCard = button.closest(".product-card");
        const product = {
          id: productCard.dataset.id,
          name: productCard.dataset.name,
          price: parseFloat(productCard.dataset.price),
          image: productCard.dataset.image
        };
        this.addToCart(product);
      });
    });
  }

  showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("show");
    }, 10);

    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }
}

// Mobile Menu Toggle
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const headerNav = document.querySelector(".header-nav");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      headerNav.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".header-nav") && !e.target.closest(".mobile-menu-btn")) {
        headerNav.classList.remove("active");
      }
    });
  }
}

// Footer Accordion
function initFooterAccordion() {
  const accordionTitles = document.querySelectorAll(
    ".footer-col.accordion .footer-title",
  );

  accordionTitles.forEach((title) => {
    title.addEventListener("click", () => {
      if (window.innerWidth > 768) return;
      const parentCol = title.parentElement;
      if (!parentCol) return;
      parentCol.classList.toggle("active");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      document.querySelectorAll(".footer-col.accordion").forEach((col) => {
        col.classList.remove("active");
      });
    }
  });
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const cartManager = new CartManager();
  initMobileMenu();
  initFooterAccordion();
  
  // Initialize carousels
  const productsGrid = document.querySelector(".products-grid");
  if (productsGrid) {
    new Carousel(".products-grid");
  }
});

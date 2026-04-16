// Cart Page Management
class CartPageManager {
  constructor() {
    this.cartKey = "umino_cart";
    this.init();
  }

  init() {
    this.renderCart();
    this.updateMobileCartCount();
    this.attachEventListeners();
  }

  getCart() {
    const cart = localStorage.getItem(this.cartKey);
    return cart ? JSON.parse(cart) : [];
  }

  saveCart(cart) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
    this.updateCartCount();
  }

  updateCartCount() {
    const cart = this.getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
      cartCountElement.textContent = totalItems;
    }
  }

  updateMobileCartCount() {
    const cart = this.getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountMobileElement = document.getElementById("cart-count-mobile");
    if (cartCountMobileElement) {
      cartCountMobileElement.textContent = totalItems;
    }
  }

  renderCart() {
    const cart = this.getCart();
    const cartContentDiv = document.getElementById("cart-content");

    if (cart.length === 0) {
      cartContentDiv.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">
            <i class="fa-solid fa-shopping-cart"></i>
          </div>
          <p>Your cart is empty</p>
          <a href="index.html" class="btn-continue-shopping">Continue Shopping</a>
        </div>
      `;
      return;
    }

    // Calculate totals
    let subtotal = 0;
    let cartHTML = '<div class="cart-content"><div class="cart-items">';

    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      subtotal += itemTotal;

      cartHTML += `
        <div class="cart-item" data-id="${item.id}">
          <div class="cart-item-image">
            <img src="${item.image}" alt="${item.name}" />
          </div>
          <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
          </div>
          <div class="cart-item-actions">
            <div class="qty-control">
              <button class="qty-decrease" data-id="${item.id}">−</button>
              <input type="number" min="1" value="${item.quantity}" class="qty-input" data-id="${item.id}" />
              <button class="qty-increase" data-id="${item.id}">+</button>
            </div>
            <div class="cart-item-total">$${itemTotal.toFixed(2)}</div>
            <button class="btn-remove" data-id="${item.id}">Remove</button>
          </div>
        </div>
      `;
    });

    cartHTML += '</div>';

    // Sidebar with totals
    cartHTML += `
      <div class="cart-sidebar">
        <div class="cart-summary">
          <div class="summary-item">
            <span>Subtotal:</span>
            <span>$${subtotal.toFixed(2)}</span>
          </div>
          <div class="summary-item">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div class="summary-item">
            <span>Tax:</span>
            <span>$0.00</span>
          </div>
          <div class="summary-item total">
            <span>Total:</span>
            <span>$${subtotal.toFixed(2)}</span>
          </div>
          <button class="btn-checkout">Proceed to Checkout</button>
          <a href="index.html" class="btn-continue-shopping" style="display: block; text-align: center; margin-top: 10px;">Continue Shopping</a>
        </div>
      </div>
    </div>`;

    cartContentDiv.innerHTML = cartHTML;
  }

  attachEventListeners() {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-remove")) {
        const productId = e.target.dataset.id;
        this.removeItem(productId);
      }

      if (e.target.classList.contains("qty-decrease")) {
        const productId = e.target.dataset.id;
        this.decreaseQuantity(productId);
      }

      if (e.target.classList.contains("qty-increase")) {
        const productId = e.target.dataset.id;
        this.increaseQuantity(productId);
      }

      if (e.target.classList.contains("qty-input")) {
        const productId = e.target.dataset.id;
        const quantity = parseInt(e.target.value) || 1;
        this.updateQuantity(productId, quantity);
      }

      if (e.target.classList.contains("btn-checkout")) {
        alert("Checkout functionality will be implemented in the next phase!");
      }
    });
  }

  removeItem(productId) {
    let cart = this.getCart();
    cart = cart.filter((item) => item.id !== productId);
    this.saveCart(cart);
    this.renderCart();
    this.attachEventListeners();
  }

  increaseQuantity(productId) {
    const cart = this.getCart();
    const item = cart.find((item) => item.id === productId);
    if (item) {
      item.quantity += 1;
      this.saveCart(cart);
      this.renderCart();
      this.attachEventListeners();
    }
  }

  decreaseQuantity(productId) {
    const cart = this.getCart();
    const item = cart.find((item) => item.id === productId);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
      this.saveCart(cart);
      this.renderCart();
      this.attachEventListeners();
    }
  }

  updateQuantity(productId, quantity) {
    const cart = this.getCart();
    const item = cart.find((item) => item.id === productId);
    if (item) {
      item.quantity = Math.max(1, parseInt(quantity));
      this.saveCart(cart);
      this.renderCart();
      this.attachEventListeners();
    }
  }
}

// Initialize cart when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const cartPageManager = new CartPageManager();
});

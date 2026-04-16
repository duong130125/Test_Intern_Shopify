# 🚀 Quick Start Guide - Umino Store

## ⚡ 5-Minute Setup

### 1. Open the Site Locally
```bash
# Option 1: Direct open
# Right-click index.html → Open with Browser

# Option 2: Python local server
cd Project_Test_Intern_Shopify
python -m http.server 8000
# Open http://localhost:8000 in browser
```

### 2. Test Shopping Cart
```
1. Click "ADD TO CART" on any product
2. See notification: "Added to cart!"
3. Click cart icon → view cart.html
4. Change quantity with +/- buttons
5. Click "Remove" to delete items
6. Go back to shop
7. Cart items persist!
```

### 3. Mobile Testing
```
1. Press F12 (Open DevTools)
2. Click device icon (top-left)
3. Select "iPhone 12" or "iPad"
4. Test mobile menu (hamburger icon)
5. Check responsive layout
6. Test all features on mobile
```

### 4. Deploy to Web

**Using GitHub Pages (Fastest)**:
```bash
git push origin master
# GitHub Settings → Pages → Select master branch
# Wait 1-2 minutes
# Live at: https://duong130125.github.io/Test_Intern_Shopify/
```

**Using Netlify**:
```bash
# Go to netlify.com
# Click "New site from Git"
# Connect GitHub → Select repo → Deploy
```

---

## 🎯 Key Features at a Glance

| Feature | Location | Status |
|---------|----------|--------|
| Shopping Cart | Click cart icon | ✅ Working |
| Add to Cart | Each product card | ✅ Working |
| Mobile Menu | Hamburger (mobile) | ✅ Working |
| Carousel | New Arrivals section | ✅ Working |
| Notifications | Bottom-right toast | ✅ Working |
| Responsive | All devices | ✅ Working |
| LocalStorage | Browser cache | ✅ Working |

---

## 📱 Device Breakpoints

| Device | Width | Columns | Nav |
|--------|-------|---------|-----|
| Mobile | < 768px | 1-2 | Hamburger |
| Tablet | 768-991px | 2 | Hamburger |
| Desktop | > 991px | 4 | Full menu |

---

## 🎨 Customization

### Change Colors
Edit `css/variables.css`:
```css
:root {
  --color-primary: #000000;      /* Change black */
  --color-badge-sale: #ff5252;   /* Change red */
  --color-bg-body: #ffffff;      /* Change white */
}
```

### Add More Products
Edit `index.html`:
```html
<div class="product-card" 
     data-id="5" 
     data-name="New Product" 
     data-price="99.99" 
     data-image="assets/images/product.png">
  <!-- Product HTML -->
</div>
```

### Change Cart Storage
Edit `js/main.js`:
```javascript
this.cartKey = "umino_cart";  // Change this key name
```

---

## 🐛 Quick Fixes

### Cart not saving?
```javascript
// Open DevTools Console (F12)
localStorage.clear()
// Refresh and try again
```

### Images not showing?
```
1. Check file paths
2. Verify images in assets/images/
3. Refresh browser (Ctrl+F5)
```

### Mobile menu broken?
```
1. Check browser console
2. Clear cache (Ctrl+Shift+Delete)
3. Try different browser
```

---

## 📊 Testing Checklist

### Before Deploying:
- [ ] Open index.html in browser
- [ ] Click "ADD TO CART" - notification appears
- [ ] Go to cart.html - item shows
- [ ] Increase quantity - total updates
- [ ] Click remove - item deleted
- [ ] Mobile menu opens/closes
- [ ] No console errors (F12)
- [ ] Images load
- [ ] All links work

### Before Going Live:
- [ ] Test on desktop (1440px)
- [ ] Test on tablet (768px)
- [ ] Test on mobile (390px)
- [ ] Clear localStorage test
- [ ] Cart persists on refresh
- [ ] All buttons clickable
- [ ] Text readable
- [ ] Images visible

---

## 📈 Performance Tips

```bash
# Check performance
# Use PageSpeed: https://pagespeed.web.dev/

# Required scores:
# Desktop: > 90
# Mobile: > 85
```

---

## 🔗 Important Files

| File | Purpose |
|------|---------|
| index.html | Homepage |
| cart.html | Shopping cart page |
| js/main.js | Main functionality |
| js/cart.js | Cart page logic |
| css/style.css | Main styles |
| css/responsive.css | Mobile styles |
| assets/ | Images & icons |

---

## 💡 Pro Tips

1. **LocalStorage Dev Tool**:
   - Right-click → Inspect → Application → LocalStorage
   - See cart data in real-time

2. **Responsive Testing**:
   - F12 → Device toolbar → Ctrl+Shift+M
   - Test all sizes at once

3. **Performance**:
   - PageSpeed Insights shows issues
   - Lighthouse (built in DevTools)
   - Network tab for slow assets

4. **Quick Reload**:
   - Hard refresh: Ctrl+Shift+R
   - Clears cache + reloads

---

## 🎓 Learning Resources

- [HTML Basics](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## ❓ Got Questions?

1. Check README.md for full documentation
2. See TESTING_GUIDE.md for testing instructions
3. Review code comments in JS files
4. Check browser console for errors

---

**Status**: ✅ Production Ready
**Last Update**: April 2026
**Version**: 1.0.0

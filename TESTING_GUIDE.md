# Umino Store - Testing & Deployment Guide

## 📋 Project Summary

### ✅ Completed Features

#### 1. Shopping Cart System ✓
- **Add to Cart**: Click "ADD TO CART" button on any product
- **Storage**: Cart data persists in browser LocalStorage
- **Cart Page**: Dedicated `cart.html` page displays all items
- **Quantity Control**: Use +/- buttons or type in quantity field
- **Remove Items**: Click "Remove" button to delete from cart
- **Totals**: Automatic calculation of subtotal, tax, and total
- **Notification**: Toast message confirms added items

#### 2. Mobile Menu ✓
- **Toggle Button**: Hamburger icon appears on devices < 768px
- **Smooth Animation**: Menu slides down with animation
- **Click Outside**: Menu closes when clicking outside
- **Responsive**: Adapts to all mobile sizes

#### 3. Product Carousel ✓
- **Navigation**: Previous/Next buttons for scrolling
- **Responsive Items**: 
  - Mobile (< 768px): 1 item visible
  - Tablet (768px-991px): 2 items visible
  - Desktop (> 991px): 4 items visible
- **Smart Buttons**: Disabled at start/end of carousel

#### 4. User Feedback ✓
- **Toast Notifications**: "Added to cart" confirmations
- **Auto-dismiss**: Notifications disappear after 2 seconds
- **Non-intrusive**: Appears in bottom-right corner

#### 5. Responsive Design ✓
- **Mobile First**: Base styles target mobile, enhanced for larger screens
- **Breakpoints**: 768px (tablet), 991px (desktop)
- **Mobile Nav**: Bottom navigation bar on mobile
- **Touch Friendly**: Large tap targets for mobile
- **Performance**: Optimized for all devices

---

## 🚀 Deployment Instructions

### Option 1: GitHub Pages (Recommended)

1. **GitHub Pages Setup**:
   ```bash
   # Repository settings → Pages → Select 'master' branch
   # Wait for deployment (usually 1-2 minutes)
   # Access via: https://duong130125.github.io/Test_Intern_Shopify/
   ```

2. **Access deployed site**:
   - Homepage: `https://duong130125.github.io/Test_Intern_Shopify/`
   - Cart page: `https://duong130125.github.io/Test_Intern_Shopify/cart.html`

### Option 2: Netlify

1. **Connect Repository**:
   - Go to netlify.com
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose `Test_Intern_Shopify` repository
   - Deploy settings (leave defaults)
   - Click "Deploy site"

2. **Custom Domain** (optional):
   - Go to Site settings
   - Domain management
   - Add custom domain

### Option 3: Vercel

1. **Deploy**:
   - Go to vercel.com
   - Import project
   - Select GitHub and choose repository
   - Deploy

2. **Access**:
   - Vercel provides auto-generated URL
   - Can customize domain

---

## 📊 Testing with PageSpeed Insights

### Steps to Test:

1. **Ensure Site is Live**:
   - Use GitHub Pages, Netlify, or Vercel
   - Get public URL

2. **Visit PageSpeed Insights**:
   - Go to https://pagespeed.web.dev/
   - Enter your live URL
   - Click "Analyze"

3. **Check Metrics**:
   - Desktop Performance: Target > 90
   - Mobile Performance: Target > 85
   - Accessibility: Target 100
   - Best Practices: Target 100
   - SEO: Target 100

### Common Issues & Solutions:

**Low Performance**:
- Compress images (use WebP format)
- Minify CSS/JS
- Enable GZIP compression
- Use CDN for assets

**Accessibility Issues**:
- Add alt text to images
- Ensure color contrast
- Add ARIA labels

**SEO Issues**:
- Add meta descriptions
- Use semantic HTML
- Add structured data

---

## 🎨 Perfect Pixel Comparison with Figma

### Prerequisites:
1. Install Perfect Pixel browser extension
2. Have Figma design open: https://www.figma.com/design/X1ktVGWM2wZKoQwIe9m9OZ/Intern-Fe-testing

### Comparison Steps:

#### 1. Compare Homepage
```
1. Open index.html in browser
2. Open Perfect Pixel extension (top-right)
3. Add new layer:
   - Name: "Homepage Design"
   - Upload Figma screenshot
   - Adjust opacity to 50%
4. Compare:
   ✓ Header placement and spacing
   ✓ Hero banner proportions
   ✓ Product grid alignment
   ✓ Button sizes and spacing
   ✓ Footer layout
```

#### 2. Compare Cart Page
```
1. Click on cart icon to go to cart.html
2. Add layer for cart design
3. Compare:
   ✓ Cart item rows
   ✓ Quantity control styling
   ✓ Button placements
   ✓ Summary sidebar
   ✓ Total calculations
```

#### 3. Compare Mobile Views
```
1. Use DevTools responsive mode (F12)
2. Set to iPhone 12 (390x844)
3. Add mobile design screenshot
4. Compare:
   ✓ Menu button position
   ✓ Product grid (2 columns)
   ✓ Button sizing
   ✓ Text sizes
```

### Key Areas to Verify:
- ✓ Color accuracy (#000000, #ffffff, etc.)
- ✓ Font sizes and weights (Jost family)
- ✓ Spacing and padding (30px desktop, 15px mobile)
- ✓ Border radius (8px products, 30px buttons)
- ✓ Icon sizes (20px header icons)
- ✓ Shadow effects (on cards, etc.)

---

## 🧪 Local Testing

### Test Shopping Cart:

```javascript
// Open browser DevTools Console (F12)

// Check cart contents
localStorage.getItem('umino_cart')

// Clear cart for fresh test
localStorage.removeItem('umino_cart')

// Add test items
// Click "ADD TO CART" on any product
// Go to cart.html
// Test quantity controls
// Test removal
```

### Test Mobile Menu:

```
1. Open DevTools (F12)
2. Click device preview (mobile icon)
3. Select "iPhone 12" or similar
4. Click hamburger menu icon (top-left)
5. Menu should slide down
6. Click outside to close
7. Click link to test navigation
```

### Test Carousel:

```
1. On desktop (> 991px)
2. Look for "New Arrivals" section
3. Use prev/next buttons
4. Buttons should disable at start/end
5. Resize to tablet (720px)
6. Should show 2 items
7. Resize to mobile (390px)
8. Should show 1 item
```

---

## 📈 Performance Optimization Checklist

### Current Status:
- [x] Mobile menu implemented
- [x] Responsive design 
- [x] Cart functionality
- [x] CSS variables used
- [x] Semantic HTML
- [x] Clean JavaScript

### For PageSpeed Improvement:

**Image Optimization**:
- [ ] Compress all PNG images
- [ ] Convert to WebP format
- [ ] Add width/height attributes
- [ ] Lazy load below-fold images

**CSS/JS Optimization**:
- [ ] Minify CSS files
- [ ] Minify JavaScript files
- [ ] Remove unused styles
- [ ] Defer non-critical CSS

**Server Performance**:
- [ ] Enable GZIP compression
- [ ] Add cache headers
- [ ] Use CDN
- [ ] Enable browser caching

**Code Quality**:
- [ ] Remove console.logs
- [ ] Fix console warnings
- [ ] Optimize font loading
- [ ] Reduce DOM elements

---

## 🔗 Useful Links

| Resource | URL |
|----------|-----|
| GitHub Repo | https://github.com/duong130125/Test_Intern_Shopify |
| Figma Design | https://www.figma.com/design/X1ktVGWM2wZKoQwIe9m9OZ/ |
| PageSpeed | https://pagespeed.web.dev/ |
| Perfect Pixel | Chrome Web Store extension |
| GitHub Pages | https://pages.github.com/ |
| Netlify | https://netlify.com |
| Vercel | https://vercel.com |

---

## 📞 Troubleshooting

### Cart not working?
```
1. Check if localStorage is enabled (browser settings)
2. Open DevTools Console
3. Run: localStorage.getItem('umino_cart')
4. If null, try adding item again
5. Check for JavaScript errors in console
```

### Mobile menu stuck?
```
1. Clear browser cache
2. Hard refresh (Ctrl+Shift+R)
3. Check console for errors
4. Try different browser
```

### Carousel not responding?
```
1. Ensure you're on desktop (> 991px)
2. Check if buttons are clickable
3. Look for console errors
4. Test with different browser
```

### Images not loading?
```
1. Check file paths in HTML
2. Verify images in assets/images folder
3. Check for 404 errors in DevTools Network tab
4. Ensure relative paths are correct
```

---

## ✅ Final Verification Checklist

- [ ] Homepage loads without errors
- [ ] All products have "ADD TO CART" button
- [ ] Cart adds items correctly
- [ ] Cart page displays items
- [ ] Quantity controls work
- [ ] Remove button deletes items
- [ ] Mobile menu toggles
- [ ] Carousel navigates
- [ ] Responsive design works on mobile
- [ ] Responsive design works on tablet
- [ ] Responsive design works on desktop
- [ ] Cart notification appears
- [ ] localStorage persists data
- [ ] No console errors
- [ ] Images load properly
- [ ] Links navigate correctly
- [ ] PageSpeed score > 85 (mobile), > 90 (desktop)
- [ ] Design matches Figma overlay

---

**Last Updated**: April 2026
**Status**: Ready for Testing & Deployment

/**
 * ============================================================
 * MOBILEZONE - PANEL DE ADMINISTRACIÓN
 * Lógica e interactividad: Inventario, Ventas, Estadísticas y Usuarios
 * ============================================================
 */

// ============================================================
// 1. ESTADO INICIAL Y DATOS BASE
// ============================================================

const INITIAL_PRODUCTS = [
    {
        id: "prod-1",
        sku: "MZ-APP-15P",
        name: "iPhone 15 Pro 256GB",
        brand: "Apple",
        category: "Smartphones",
        branch: "Sucursal Centro",
        cost: 18500,
        price: 23999,
        stock: 14,
        minStock: 5,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: "prod-2",
        sku: "MZ-SAM-S24U",
        name: "Samsung Galaxy S24 Ultra",
        brand: "Samsung",
        category: "Smartphones",
        branch: "Plaza Norte",
        cost: 20000,
        price: 26499,
        stock: 8,
        minStock: 4,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: "prod-3",
        sku: "MZ-XIA-14P",
        name: "Xiaomi 14 Pro 512GB",
        brand: "Xiaomi",
        category: "Smartphones",
        branch: "Sucursal Centro",
        cost: 14000,
        price: 18299,
        stock: 3, // Stock Crítico
        minStock: 5,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: "prod-4",
        sku: "MZ-GOO-P8P",
        name: "Google Pixel 8 Pro",
        brand: "Google",
        category: "Smartphones",
        branch: "Galerías Sur",
        cost: 15200,
        price: 19499,
        stock: 6,
        minStock: 4,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: "prod-5",
        sku: "MZ-MOT-E50",
        name: "Motorola Edge 50 Ultra",
        brand: "Motorola",
        category: "Smartphones",
        branch: "Tienda Online",
        cost: 11500,
        price: 14999,
        stock: 19,
        minStock: 5,
        image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: "prod-6",
        sku: "MZ-ACC-MAG",
        name: "Funda Silicona MagSafe",
        brand: "Apple",
        category: "Accesorios",
        branch: "Sucursal Centro",
        cost: 180,
        price: 499,
        stock: 42,
        minStock: 10,
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: "prod-7",
        sku: "MZ-ACC-65W",
        name: "Cargador Rápido GaN 65W",
        brand: "Anker",
        category: "Accesorios",
        branch: "Plaza Norte",
        cost: 320,
        price: 799,
        stock: 2, // Stock Crítico
        minStock: 8,
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: "prod-8",
        sku: "MZ-AUD-APP2",
        name: "AirPods Pro (2da Gen)",
        brand: "Apple",
        category: "Audio",
        branch: "Galerías Sur",
        cost: 3800,
        price: 4999,
        stock: 11,
        minStock: 3,
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=300&q=80"
    }
];

const INITIAL_SALES = [
    {
        id: "MZ-1094",
        date: "2026-09-30 18:22",
        customer: "Carlos Santana",
        branch: "Sucursal Centro",
        seller: "Laura Sánchez",
        items: [
            { name: "iPhone 15 Pro 256GB", qty: 1, price: 23999 },
            { name: "Funda Silicona MagSafe", qty: 1, price: 499 }
        ],
        paymentMethod: "Tarjeta de Crédito",
        total: 24498,
        status: "Completada"
    },
    {
        id: "MZ-1093",
        date: "2026-09-30 16:45",
        customer: "Valeria Montero",
        branch: "Plaza Norte",
        seller: "Roberto Gómez",
        items: [
            { name: "Samsung Galaxy S24 Ultra", qty: 1, price: 26499 }
        ],
        paymentMethod: "Transferencia",
        total: 26499,
        status: "Completada"
    },
    {
        id: "MZ-1092",
        date: "2026-09-30 14:10",
        customer: "Héctor Beltrán",
        branch: "Tienda Online",
        seller: "Portal Web",
        items: [
            { name: "Motorola Edge 50 Ultra", qty: 1, price: 14999 },
            { name: "Cargador Rápido GaN 65W", qty: 1, price: 799 }
        ],
        paymentMethod: "Mercado Pago",
        total: 15798,
        status: "Pendiente"
    },
    {
        id: "MZ-1091",
        date: "2026-09-30 11:30",
        customer: "Daniela Ortiz",
        branch: "Galerías Sur",
        seller: "Alejandro Ruiz",
        items: [
            { name: "AirPods Pro (2da Gen)", qty: 2, price: 4999 }
        ],
        paymentMethod: "Efectivo",
        total: 9998,
        status: "Completada"
    },
    {
        id: "MZ-1090",
        date: "2026-09-29 19:15",
        customer: "Fernando Vargas",
        branch: "Sucursal Centro",
        seller: "Laura Sánchez",
        items: [
            { name: "Xiaomi 14 Pro 512GB", qty: 1, price: 18299 }
        ],
        paymentMethod: "Tarjeta de Débito",
        total: 18299,
        status: "Completada"
    },
    {
        id: "MZ-1089",
        date: "2026-09-28 15:40",
        customer: "Mariana Morales",
        branch: "Plaza Norte",
        seller: "Roberto Gómez",
        items: [
            { name: "Google Pixel 8 Pro", qty: 1, price: 19499 }
        ],
        paymentMethod: "Tarjeta de Crédito",
        total: 19499,
        status: "Completada"
    },
    {
        id: "MZ-1088",
        date: "2026-09-27 12:05",
        customer: "Eduardo Peña",
        branch: "Tienda Online",
        seller: "Portal Web",
        items: [
            { name: "iPhone 15 Pro 256GB", qty: 1, price: 23999 }
        ],
        paymentMethod: "Transferencia",
        total: 23999,
        status: "Cancelada"
    }
];

const INITIAL_USERS = [
    {
        id: "usr-1",
        name: "Carlos Mendoza (Tú)",
        email: "carlos.admin@mobilezone.com",
        role: "ADMIN",
        branch: "Todas las Sucursales",
        salesCount: 42,
        totalSalesAmount: 489500,
        status: "Activo"
    },
    {
        id: "usr-2",
        name: "Laura Sánchez",
        email: "laura.sanchez@mobilezone.com",
        role: "VENDEDOR",
        branch: "Sucursal Centro",
        salesCount: 28,
        totalSalesAmount: 235400,
        status: "Activo"
    },
    {
        id: "usr-3",
        name: "Roberto Gómez",
        email: "roberto.gomez@mobilezone.com",
        role: "VENDEDOR",
        branch: "Plaza Norte",
        salesCount: 23,
        totalSalesAmount: 198700,
        status: "Activo"
    },
    {
        id: "usr-4",
        name: "Mariana Torres",
        email: "mariana.torres@mobilezone.com",
        role: "SUPERVISOR",
        branch: "Sucursal Centro",
        salesCount: 4,
        totalSalesAmount: 32000,
        status: "Activo"
    },
    {
        id: "usr-5",
        name: "Alejandro Ruiz",
        email: "alejandro.ruiz@mobilezone.com",
        role: "VENDEDOR",
        branch: "Galerías Sur",
        salesCount: 19,
        totalSalesAmount: 145900,
        status: "Inactivo"
    }
];

// Estado en memoria respaldado por localStorage
let appData = {
    products: JSON.parse(localStorage.getItem("mz_products")) || INITIAL_PRODUCTS,
    sales: JSON.parse(localStorage.getItem("mz_sales")) || INITIAL_SALES,
    users: JSON.parse(localStorage.getItem("mz_users")) || INITIAL_USERS,
    currentRole: "ADMIN", // ADMIN, VENDEDOR, SUPERVISOR
    currentBranch: "ALL", // ALL, Sucursal Centro, Plaza Norte, Galerías Sur, Tienda Online
    statsQuery: {
        period: "monthly", // daily, weekly, monthly, annual
        branch: "ALL"
    }
};

function saveState() {
    localStorage.setItem("mz_products", JSON.stringify(appData.products));
    localStorage.setItem("mz_sales", JSON.stringify(appData.sales));
    localStorage.setItem("mz_users", JSON.stringify(appData.users));
}

// Formateador de moneda MXN
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};

// ============================================================
// 2. INICIALIZACIÓN DE LA APLICACIÓN
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initGlobalControls();
    initModals();
    
    // Renderizado inicial
    renderDashboard();
    renderInventory();
    renderSales();
    renderStatistics();
    renderUsers();
    
    // Notificación de bienvenida
    showToast("Bienvenido al Portal Administrativo de MobileZone", "info");
});

// Navegación de pestañas (Sidebar)
function initNavigation() {
    const navItems = document.querySelectorAll(".nav-item");
    const viewSections = document.querySelectorAll(".view-section");
    
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetView = item.getAttribute("data-view");
            if (!targetView) return;
            
            navItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
            
            viewSections.forEach(sec => {
                if (sec.id === targetView) {
                    sec.classList.add("active");
                } else {
                    sec.classList.remove("active");
                }
            });
            
            // Si entra a estadísticas, refrescar gráficos
            if (targetView === "view-statistics") {
                setTimeout(updateStatisticsCharts, 150);
            }
            
            // Cerrar menú móvil al navegar
            document.querySelector(".sidebar").classList.remove("open");
        });
    });
    
    // Toggle menú móvil
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const closeSidebarBtn = document.getElementById("closeSidebarBtn");
    const sidebar = document.querySelector(".sidebar");
    
    if (mobileBtn) {
        mobileBtn.addEventListener("click", () => sidebar.classList.toggle("open"));
    }
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener("click", () => sidebar.classList.remove("open"));
    }
}

// Controles globales: Selector de Sucursal y Cambio de Rol
function initGlobalControls() {
    const branchSelector = document.getElementById("globalBranchSelect");
    if (branchSelector) {
        branchSelector.addEventListener("change", (e) => {
            appData.currentBranch = e.target.value;
            appData.statsQuery.branch = e.target.value;
            
            // Sincronizar selector de estadísticas también
            const statBranchSelect = document.getElementById("statBranchSelect");
            if (statBranchSelect) statBranchSelect.value = e.target.value;
            
            showToast(`Vista filtrada: ${branchSelector.options[branchSelector.selectedIndex].text}`, "info");
            
            renderDashboard();
            renderInventory();
            renderSales();
            renderStatistics();
        });
    }
    
    // Selector demostrativo de Rol de Usuario
    const roleSelector = document.getElementById("roleSelectDemo");
    if (roleSelector) {
        roleSelector.addEventListener("change", (e) => {
            setRoleDemo(e.target.value);
        });
    }
}

// ============================================================
// 3. CONTROL DE ROLES Y PERMISOS (ADMIN, VENDEDOR, SUPERVISOR)
// ============================================================

function setRoleDemo(role) {
    appData.currentRole = role;
    
    const userRoleBadge = document.getElementById("sidebarUserRoleBadge");
    const userRoleHeader = document.getElementById("headerUserRole");
    const userNameHeader = document.getElementById("headerUserName");
    const sidebarUserName = document.getElementById("sidebarUserName");
    
    // Elementos con restricción de rol
    const adminOnlyElements = document.querySelectorAll(".role-admin-only");
    const supervisorOnlyElements = document.querySelectorAll(".role-supervisor-only");
    
    if (role === "ADMIN") {
        if (userRoleBadge) {
            userRoleBadge.className = "sidebar-user-role role-admin";
            userRoleBadge.innerHTML = `<i class="fa-solid fa-shield-halved"></i> ADMIN`;
        }
        if (userRoleHeader) userRoleHeader.textContent = "Administrador General";
        if (userNameHeader) userNameHeader.textContent = "Carlos Mendoza";
        if (sidebarUserName) sidebarUserName.textContent = "Carlos Mendoza";
        
        adminOnlyElements.forEach(el => el.style.display = "");
        showToast("Modo Activo: ADMINISTRADOR (Acceso total a métricas, inventario y usuarios)", "success");
    } 
    else if (role === "VENDEDOR") {
        if (userRoleBadge) {
            userRoleBadge.className = "sidebar-user-role role-vendedor";
            userRoleBadge.innerHTML = `<i class="fa-solid fa-tag"></i> VENDEDOR`;
        }
        if (userRoleHeader) userRoleHeader.textContent = "Ejecutivo de Ventas";
        if (userNameHeader) userNameHeader.textContent = "Laura Sánchez";
        if (sidebarUserName) sidebarUserName.textContent = "Laura Sánchez";
        
        // Vendedor no ve administración de usuarios ni costos sensibles de proveedores
        adminOnlyElements.forEach(el => el.style.display = "none");
        showToast("Modo Activo: VENDEDOR (Acceso enfocado a POS, cotizaciones y ventas)", "warning");
    } 
    else if (role === "SUPERVISOR") {
        if (userRoleBadge) {
            userRoleBadge.className = "sidebar-user-role role-supervisor";
            userRoleBadge.innerHTML = `<i class="fa-solid fa-boxes-stacked"></i> SUPERVISOR`;
        }
        if (userRoleHeader) userRoleHeader.textContent = "Supervisor de Almacén";
        if (userNameHeader) userNameHeader.textContent = "Mariana Torres";
        if (sidebarUserName) sidebarUserName.textContent = "Mariana Torres";
        
        adminOnlyElements.forEach(el => el.style.display = "");
        showToast("Modo Activo: SUPERVISOR (Control de stock, alertas y movimientos)", "info");
    }
    
    // Re-renderizar para ocultar o mostrar columnas sensibles (ej. costo de compra)
    renderInventory();
    renderUsers();
}

function renderUsers() {
    const tbody = document.getElementById("usersTableBody");
    if (!tbody) return;
    
    tbody.innerHTML = "";
    
    appData.users.forEach(user => {
        let roleBadgeClass = "badge-neutral";
        let roleIcon = "fa-user";
        if (user.role === "ADMIN") { roleBadgeClass = "badge-danger"; roleIcon = "fa-shield-halved"; }
        else if (user.role === "VENDEDOR") { roleBadgeClass = "badge-success"; roleIcon = "fa-tag"; }
        else if (user.role === "SUPERVISOR") { roleBadgeClass = "badge-warning"; roleIcon = "fa-boxes-stacked"; }
        
        const statusBadge = user.status === "Activo" ? "badge-success" : "badge-neutral";
        
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>
                <div style="display:flex; align-items:center; gap:10px;">
                    <div class="user-avatar-small" style="background:#3b82f6;">${user.name.charAt(0)}</div>
                    <div>
                        <strong style="color:var(--text-primary); font-size:0.875rem;">${user.name}</strong><br>
                        <span style="color:var(--text-secondary); font-size:0.775rem;">${user.email}</span>
                    </div>
                </div>
            </td>
            <td>
                <span class="badge ${roleBadgeClass}">
                    <i class="fa-solid ${roleIcon}"></i> ${user.role}
                </span>
            </td>
            <td>
                <span style="font-weight:500; font-size:0.825rem;"><i class="fa-solid fa-location-dot" style="color:var(--text-muted); margin-right:4px;"></i>${user.branch}</span>
            </td>
            <td>
                <strong>${formatCurrency(user.totalSalesAmount)}</strong>
                <div style="font-size:0.725rem; color:var(--text-secondary);">${user.salesCount} ventas realizadas</div>
            </td>
            <td>
                <span class="badge ${statusBadge}">${user.status}</span>
            </td>
            <td>
                <button class="btn btn-secondary btn-sm" onclick="editUser('${user.id}')" title="Editar Permisos">
                    <i class="fa-solid fa-user-pen"></i> Editar
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// ============================================================
// 4. CONTROL DE INVENTARIO
// ============================================================

function renderInventory() {
    const tbody = document.getElementById("inventoryTableBody");
    if (!tbody) return;
    
    const searchVal = (document.getElementById("invSearchInput")?.value || "").toLowerCase();
    const catVal = document.getElementById("invCategorySelect")?.value || "ALL";
    const statusVal = document.getElementById("invStatusSelect")?.value || "ALL";
    
    // Filtrar productos
    let filtered = appData.products.filter(p => {
        // Filtro global sucursal
        if (appData.currentBranch !== "ALL" && p.branch !== appData.currentBranch && p.branch !== "Todas") {
            return false;
        }
        // Filtro búsqueda
        const matchSearch = p.name.toLowerCase().includes(searchVal) || 
                            p.sku.toLowerCase().includes(searchVal) || 
                            p.brand.toLowerCase().includes(searchVal);
        if (!matchSearch) return false;
        
        // Filtro categoría
        if (catVal !== "ALL" && p.category !== catVal) return false;
        
        // Filtro estado stock
        if (statusVal === "NORMAL" && p.stock <= p.minStock) return false;
        if (statusVal === "LOW" && (p.stock > p.minStock || p.stock === 0)) return false;
        if (statusVal === "OUT" && p.stock > 0) return false;
        
        return true;
    });
    
    // Actualizar KPIs de Inventario
    const totalProdCount = appData.products.length;
    const totalStockUnits = appData.products.reduce((acc, p) => acc + p.stock, 0);
    const lowStockCount = appData.products.filter(p => p.stock <= p.minStock && p.stock > 0).length;
    const totalInventoryValue = appData.products.reduce((acc, p) => acc + (p.price * p.stock), 0);
    
    const kpiInvTotal = document.getElementById("kpiInvTotal");
    const kpiInvStock = document.getElementById("kpiInvStock");
    const kpiInvLow = document.getElementById("kpiInvLow");
    const kpiInvValue = document.getElementById("kpiInvValue");
    
    if (kpiInvTotal) kpiInvTotal.textContent = totalProdCount;
    if (kpiInvStock) kpiInvStock.textContent = `${totalStockUnits} u.`;
    if (kpiInvLow) kpiInvLow.textContent = lowStockCount;
    if (kpiInvValue) kpiInvValue.textContent = formatCurrency(totalInventoryValue);
    
    // Notificación en badge del sidebar
    const badgeInv = document.getElementById("sidebarLowStockBadge");
    if (badgeInv) {
        badgeInv.textContent = lowStockCount;
        badgeInv.style.display = lowStockCount > 0 ? "inline-block" : "none";
    }

    tbody.innerHTML = "";
    
    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:2rem; color:var(--text-secondary);">No se encontraron productos con los filtros seleccionados.</td></tr>`;
        return;
    }
    
    filtered.forEach(p => {
        let stockBadge = "badge-success";
        let stockLabel = "En Stock";
        if (p.stock === 0) {
            stockBadge = "badge-danger";
            stockLabel = "Agotado";
        } else if (p.stock <= p.minStock) {
            stockBadge = "badge-warning";
            stockLabel = `Stock Crítico (Mín ${p.minStock})`;
        }
        
        const showCost = appData.currentRole === "ADMIN" || appData.currentRole === "SUPERVISOR";
        
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>
                <div class="product-cell">
                    <img src="${p.image}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300'">
                    <div class="product-meta">
                        <h4>${p.name}</h4>
                        <span>${p.brand} · ${p.category}</span>
                    </div>
                </div>
            </td>
            <td><code>${p.sku}</code></td>
            <td><span style="font-size:0.8125rem;">${p.branch}</span></td>
            <td>
                <span class="badge ${stockBadge}">${stockLabel}</span>
            </td>
            <td>
                <div class="stock-stepper">
                    <button class="stock-btn" onclick="adjustProductStock('${p.id}', -1)" title="Reducir Stock">-</button>
                    <span class="stock-count-val">${p.stock}</span>
                    <button class="stock-btn" onclick="adjustProductStock('${p.id}', 1)" title="Aumentar Stock">+</button>
                </div>
            </td>
            <td>
                <strong style="color:var(--text-primary);">${formatCurrency(p.price)}</strong>
                ${showCost ? `<br><small style="color:var(--text-muted); font-size:0.75rem;">Costo: ${formatCurrency(p.cost)}</small>` : ''}
            </td>
            <td>
                <div style="display:flex; gap:0.4rem;">
                    <button class="btn btn-secondary btn-sm" onclick="editProduct('${p.id}')" title="Editar"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="btn btn-danger btn-sm" onclick="deleteProduct('${p.id}')" title="Eliminar"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function adjustProductStock(prodId, delta) {
    const prod = appData.products.find(p => p.id === prodId);
    if (!prod) return;
    
    const newStock = prod.stock + delta;
    if (newStock < 0) {
        showToast("El inventario no puede ser inferior a 0", "warning");
        return;
    }
    
    prod.stock = newStock;
    saveState();
    renderInventory();
    renderDashboard();
    showToast(`Stock de "${prod.name}" ajustado a ${newStock} unidades`, "success");
}

function deleteProduct(prodId) {
    if (!confirm("¿Está seguro de eliminar este producto del inventario?")) return;
    appData.products = appData.products.filter(p => p.id !== prodId);
    saveState();
    renderInventory();
    renderDashboard();
    showToast("Producto eliminado del inventario", "danger");
}

function openAddProductModal() {
    const modal = document.getElementById("productModal");
    const form = document.getElementById("productForm");
    if (!modal || !form) return;
    
    form.reset();
    document.getElementById("productIdInput").value = "";
    document.getElementById("modalProductTitle").textContent = "Registrar Nuevo Celular / Producto";
    modal.classList.add("active");
}

function editProduct(prodId) {
    const prod = appData.products.find(p => p.id === prodId);
    if (!prod) return;
    
    document.getElementById("productIdInput").value = prod.id;
    document.getElementById("prodName").value = prod.name;
    document.getElementById("prodSku").value = prod.sku;
    document.getElementById("prodBrand").value = prod.brand;
    document.getElementById("prodCategory").value = prod.category;
    document.getElementById("prodBranch").value = prod.branch;
    document.getElementById("prodCost").value = prod.cost;
    document.getElementById("prodPrice").value = prod.price;
    document.getElementById("prodStock").value = prod.stock;
    document.getElementById("prodMinStock").value = prod.minStock;
    document.getElementById("prodImage").value = prod.image;
    
    document.getElementById("modalProductTitle").textContent = "Editar Producto";
    document.getElementById("productModal").classList.add("active");
}

function saveProductFromForm(e) {
    e.preventDefault();
    const id = document.getElementById("productIdInput").value;
    const name = document.getElementById("prodName").value.trim();
    const sku = document.getElementById("prodSku").value.trim();
    const brand = document.getElementById("prodBrand").value;
    const category = document.getElementById("prodCategory").value;
    const branch = document.getElementById("prodBranch").value;
    const cost = parseFloat(document.getElementById("prodCost").value) || 0;
    const price = parseFloat(document.getElementById("prodPrice").value) || 0;
    const stock = parseInt(document.getElementById("prodStock").value) || 0;
    const minStock = parseInt(document.getElementById("prodMinStock").value) || 3;
    const image = document.getElementById("prodImage").value.trim() || "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300";
    
    if (id) {
        // Actualizar
        const prod = appData.products.find(p => p.id === id);
        if (prod) {
            Object.assign(prod, { name, sku, brand, category, branch, cost, price, stock, minStock, image });
            showToast("Producto actualizado correctamente", "success");
        }
    } else {
        // Crear
        const newProduct = {
            id: "prod-" + Date.now(),
            sku: sku || "MZ-" + Math.floor(1000 + Math.random() * 9000),
            name, brand, category, branch, cost, price, stock, minStock, image
        };
        appData.products.unshift(newProduct);
        showToast("Nuevo producto añadido al inventario", "success");
    }
    
    saveState();
    closeAllModals();
    renderInventory();
    renderDashboard();
}

// ============================================================
// 5. CONTROL DE VENTAS
// ============================================================

function renderSales() {
    const tbody = document.getElementById("salesTableBody");
    if (!tbody) return;
    
    const searchVal = (document.getElementById("salesSearchInput")?.value || "").toLowerCase();
    const branchVal = document.getElementById("salesBranchSelect")?.value || "ALL";
    const statusVal = document.getElementById("salesStatusSelect")?.value || "ALL";
    
    let filtered = appData.sales.filter(s => {
        if (appData.currentBranch !== "ALL" && s.branch !== appData.currentBranch) {
            return false;
        }
        if (branchVal !== "ALL" && s.branch !== branchVal) {
            return false;
        }
        if (statusVal !== "ALL" && s.status !== statusVal) {
            return false;
        }
        const matchSearch = s.id.toLowerCase().includes(searchVal) ||
                            s.customer.toLowerCase().includes(searchVal) ||
                            s.seller.toLowerCase().includes(searchVal);
        return matchSearch;
    });
    
    // KPIs de Ventas
    const completedSales = appData.sales.filter(s => s.status === "Completada");
    const totalRevenue = completedSales.reduce((acc, s) => acc + s.total, 0);
    const avgTicket = completedSales.length > 0 ? (totalRevenue / completedSales.length) : 0;
    const pendingSales = appData.sales.filter(s => s.status === "Pendiente").length;
    
    const kpiRevenue = document.getElementById("kpiSalesRevenue");
    const kpiCount = document.getElementById("kpiSalesCount");
    const kpiAvg = document.getElementById("kpiSalesAvg");
    const kpiPending = document.getElementById("kpiSalesPending");
    
    if (kpiRevenue) kpiRevenue.textContent = formatCurrency(totalRevenue);
    if (kpiCount) kpiCount.textContent = completedSales.length;
    if (kpiAvg) kpiAvg.textContent = formatCurrency(avgTicket);
    if (kpiPending) kpiPending.textContent = pendingSales;
    
    tbody.innerHTML = "";
    
    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:2rem; color:var(--text-secondary);">No hay registros de ventas que coincidan con la consulta.</td></tr>`;
        return;
    }
    
    filtered.forEach(s => {
        let statusBadge = "badge-success";
        if (s.status === "Pendiente") statusBadge = "badge-warning";
        if (s.status === "Cancelada") statusBadge = "badge-danger";
        
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>#${s.id}</strong></td>
            <td>${s.date}</td>
            <td>
                <strong>${s.customer}</strong>
            </td>
            <td>
                <span class="badge badge-neutral"><i class="fa-solid fa-shop"></i> ${s.branch}</span>
            </td>
            <td>${s.seller}</td>
            <td>
                <span style="font-size:0.8125rem; color:var(--text-secondary);"><i class="fa-solid fa-credit-card"></i> ${s.paymentMethod}</span>
            </td>
            <td><strong style="color:var(--text-primary); font-size:0.95rem;">${formatCurrency(s.total)}</strong></td>
            <td><span class="badge ${statusBadge}">${s.status}</span></td>
            <td>
                <div style="display:flex; gap:0.35rem;">
                    <button class="btn btn-secondary btn-sm" onclick="viewSaleTicket('${s.id}')" title="Ver Recibo / Ticket"><i class="fa-solid fa-receipt"></i> Recibo</button>
                    ${s.status === 'Pendiente' ? `<button class="btn btn-success btn-sm" onclick="completeSale('${s.id}')" title="Completar Venta"><i class="fa-solid fa-check"></i></button>` : ''}
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openNewSaleModal() {
    const modal = document.getElementById("newSaleModal");
    const select = document.getElementById("saleProductSelect");
    if (!modal || !select) return;
    
    // Llenar combo de productos disponibles
    select.innerHTML = '<option value="">-- Seleccionar celular / producto --</option>';
    appData.products.filter(p => p.stock > 0).forEach(p => {
        const opt = document.createElement("option");
        opt.value = p.id;
        opt.textContent = `${p.name} - ${formatCurrency(p.price)} (Stock: ${p.stock})`;
        select.appendChild(opt);
    });
    
    document.getElementById("saleQty").value = "1";
    document.getElementById("saleCustomer").value = "";
    document.getElementById("salePayment").value = "Tarjeta de Crédito";
    updateSaleModalTotals();
    modal.classList.add("active");
}

function updateSaleModalTotals() {
    const prodId = document.getElementById("saleProductSelect").value;
    const qty = parseInt(document.getElementById("saleQty").value) || 1;
    const prod = appData.products.find(p => p.id === prodId);
    
    const subtotalEl = document.getElementById("saleModalSubtotal");
    const totalEl = document.getElementById("saleModalTotal");
    
    if (prod) {
        const subtotal = prod.price * qty;
        if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
        if (totalEl) totalEl.textContent = formatCurrency(subtotal);
    } else {
        if (subtotalEl) subtotalEl.textContent = "$0";
        if (totalEl) totalEl.textContent = "$0";
    }
}

function registerNewSale(e) {
    e.preventDefault();
    const prodId = document.getElementById("saleProductSelect").value;
    const qty = parseInt(document.getElementById("saleQty").value) || 1;
    const customer = document.getElementById("saleCustomer").value.trim() || "Cliente Mostrador";
    const payment = document.getElementById("salePayment").value;
    const branch = document.getElementById("saleBranchSelect").value;
    
    const prod = appData.products.find(p => p.id === prodId);
    if (!prod) {
        showToast("Seleccione un producto válido", "warning");
        return;
    }
    
    if (prod.stock < qty) {
        showToast(`Stock insuficiente. Solo hay ${prod.stock} unidades de este modelo.`, "danger");
        return;
    }
    
    // Descontar inventario
    prod.stock -= qty;
    
    // Crear venta
    const newSale = {
        id: "MZ-" + Math.floor(1100 + Math.random() * 8900),
        date: new Date().toISOString().replace('T', ' ').substring(0, 16),
        customer,
        branch,
        seller: appData.currentRole === "VENDEDOR" ? "Laura Sánchez" : "Carlos Mendoza",
        items: [
            { name: prod.name, qty, price: prod.price }
        ],
        paymentMethod: payment,
        total: prod.price * qty,
        status: "Completada"
    };
    
    appData.sales.unshift(newSale);
    saveState();
    
    closeAllModals();
    renderInventory();
    renderSales();
    renderDashboard();
    renderStatistics();
    
    showToast(`Venta #${newSale.id} registrada con éxito por ${formatCurrency(newSale.total)}`, "success");
    viewSaleTicket(newSale.id);
}

function completeSale(saleId) {
    const sale = appData.sales.find(s => s.id === saleId);
    if (!sale) return;
    sale.status = "Completada";
    saveState();
    renderSales();
    renderDashboard();
    renderStatistics();
    showToast(`Venta #${sale.id} marcada como completada`, "success");
}

function viewSaleTicket(saleId) {
    const sale = appData.sales.find(s => s.id === saleId);
    if (!sale) return;
    
    const modal = document.getElementById("ticketModal");
    const container = document.getElementById("ticketContent");
    if (!modal || !container) return;
    
    let itemsRows = "";
    sale.items.forEach(it => {
        itemsRows += `
            <tr>
                <td>${it.qty}x ${it.name}</td>
                <td style="text-align:right;">${formatCurrency(it.price * it.qty)}</td>
            </tr>
        `;
    });
    
    const tax = Math.round(sale.total * 0.16);
    const subtotal = sale.total - tax;
    
    container.innerHTML = `
        <div class="ticket-wrapper">
            <div class="ticket-header">
                <h2>MOBILEZONE S.A. DE C.V.</h2>
                <div class="ticket-meta">
                    RFC: MZO240510-9X1<br>
                    ${sale.branch}<br>
                    Tel: (441) 249-0354<br>
                    <strong>FOLIO: #${sale.id}</strong><br>
                    Fecha: ${sale.date}
                </div>
            </div>
            
            <div style="font-size:0.8rem; margin-bottom:0.75rem;">
                <strong>Cliente:</strong> ${sale.customer}<br>
                <strong>Atendido por:</strong> ${sale.seller}<br>
                <strong>Método de Pago:</strong> ${sale.paymentMethod}
            </div>
            
            <table class="ticket-table">
                <thead>
                    <tr>
                        <th>Descripción</th>
                        <th style="text-align:right;">Importe</th>
                    </tr>
                </thead>
                <tbody>
                    ${itemsRows}
                </tbody>
            </table>
            
            <div style="font-size:0.8rem; display:flex; justify-content:space-between; margin-bottom:4px;">
                <span>Subtotal (sin IVA):</span>
                <span>${formatCurrency(subtotal)}</span>
            </div>
            <div style="font-size:0.8rem; display:flex; justify-content:space-between; margin-bottom:8px;">
                <span>IVA Trasladado (16%):</span>
                <span>${formatCurrency(tax)}</span>
            </div>
            <div class="ticket-total-row">
                <span>TOTAL A PAGAR:</span>
                <span>${formatCurrency(sale.total)}</span>
            </div>
            
            <div class="ticket-footer">
                <p>¡Gracias por tu compra en MobileZone!</p>
                <p>Garantía directa de 1 año con fabricante.</p>
                <p>Conserva este comprobante para cambios o devoluciones.</p>
            </div>
        </div>
    `;
    
    modal.classList.add("active");
}

// ============================================================
// 6. ESTADÍSTICAS Y CONSULTAS DINÁMICAS (DIARIA, SEMANAL, ETC)
// ============================================================

let chartSalesEvolution = null;
let chartBranchDistribution = null;
let chartTopCategories = null;

function renderStatistics() {
    initStatisticsControls();
    updateStatisticsSummary();
    updateStatisticsCharts();
}

function initStatisticsControls() {
    const periodButtons = document.querySelectorAll(".period-tab-btn");
    periodButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            periodButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            appData.statsQuery.period = btn.getAttribute("data-period");
            updateStatisticsSummary();
            updateStatisticsCharts();
        });
    });
    
    const statBranchSelect = document.getElementById("statBranchSelect");
    if (statBranchSelect) {
        statBranchSelect.addEventListener("change", (e) => {
            appData.statsQuery.branch = e.target.value;
            updateStatisticsSummary();
            updateStatisticsCharts();
        });
    }
}

function updateStatisticsSummary() {
    const period = appData.statsQuery.period;
    const branch = appData.statsQuery.branch;
    
    // Métricas calculadas según la consulta seleccionada
    let multiplier = 1;
    let periodLabel = "Mensual";
    
    if (period === "daily") {
        multiplier = 0.08;
        periodLabel = "Hoy (Diaria)";
    } else if (period === "weekly") {
        multiplier = 0.28;
        periodLabel = "Esta Semana";
    } else if (period === "monthly") {
        multiplier = 1.0;
        periodLabel = "Mes en Curso";
    } else if (period === "annual") {
        multiplier = 8.5;
        periodLabel = "Año 2026 (Proyección)";
    }
    
    // Base de ventas filtrada por sucursal
    let baseCompleted = appData.sales.filter(s => s.status === "Completada");
    if (branch !== "ALL") {
        baseCompleted = baseCompleted.filter(s => s.branch === branch);
    }
    
    let baseSum = baseCompleted.reduce((acc, s) => acc + s.total, 0);
    if (baseSum === 0) baseSum = 25000;
    
    const estimatedSales = Math.round(baseSum * multiplier);
    const estimatedOrders = Math.max(1, Math.round(baseCompleted.length * multiplier));
    const estimatedAvg = Math.round(estimatedSales / estimatedOrders);
    const estimatedMargin = Math.round(estimatedSales * 0.28); // 28% margen estimado
    
    // Actualizar etiquetas en la interfaz
    const elPeriodLabel = document.getElementById("statPeriodLabel");
    if (elPeriodLabel) elPeriodLabel.textContent = `Consulta: ${periodLabel} · ${branch === 'ALL' ? 'Todas las Sucursales' : branch}`;
    
    const statTotalRev = document.getElementById("statTotalRev");
    const statOrdersCount = document.getElementById("statOrdersCount");
    const statAvgTicket = document.getElementById("statAvgTicket");
    const statEstMargin = document.getElementById("statEstMargin");
    
    if (statTotalRev) statTotalRev.textContent = formatCurrency(estimatedSales);
    if (statOrdersCount) statOrdersCount.textContent = `${estimatedOrders} ventas`;
    if (statAvgTicket) statAvgTicket.textContent = formatCurrency(estimatedAvg);
    if (statEstMargin) statEstMargin.textContent = formatCurrency(estimatedMargin);
}

function updateStatisticsCharts() {
    if (typeof Chart === "undefined") return;
    
    const period = appData.statsQuery.period;
    const branch = appData.statsQuery.branch;
    
    // 1. CHART EVOLUCIÓN DE VENTAS
    let labels = [];
    let dataPoints = [];
    
    if (period === "daily") {
        labels = ["09:00", "11:00", "13:00", "15:00", "17:00", "19:00", "21:00"];
        dataPoints = [15000, 32000, 48000, 29000, 54000, 68000, 22000];
    } else if (period === "weekly") {
        labels = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
        dataPoints = [42000, 58000, 61000, 79000, 115000, 148000, 92000];
    } else if (period === "monthly") {
        labels = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
        dataPoints = [180000, 195000, 220000, 210000, 260000, 290000, 310000, 340000, 385000, 360000, 420000, 510000];
    } else { // annual
        labels = ["2023", "2024", "2025", "2026 (Actual)"];
        dataPoints = [2100000, 2850000, 3650000, 4420000];
    }
    
    // Si se filtra por sucursal específica, escalar proporcionalmente
    if (branch !== "ALL") {
        dataPoints = dataPoints.map(val => Math.round(val * 0.35));
    }
    
    const ctxEvolution = document.getElementById("chartSalesEvolution");
    if (ctxEvolution) {
        if (chartSalesEvolution) chartSalesEvolution.destroy();
        
        chartSalesEvolution = new Chart(ctxEvolution, {
            type: "line",
            data: {
                labels: labels,
                datasets: [{
                    label: "Ingresos por Ventas ($ MXN)",
                    data: dataPoints,
                    borderColor: "#2563eb",
                    backgroundColor: "rgba(37, 99, 235, 0.1)",
                    borderWidth: 3,
                    fill: true,
                    tension: 0.35,
                    pointBackgroundColor: "#2563eb",
                    pointRadius: 4,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (ctx) => ` Ingresos: ${formatCurrency(ctx.parsed.y)}`
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: "#f1f5f9" },
                        ticks: {
                            callback: (val) => "$" + (val >= 1000 ? (val / 1000) + "k" : val)
                        }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }
    
    // 2. CHART DISTRIBUCIÓN POR SUCURSAL
    const ctxBranch = document.getElementById("chartBranchDistribution");
    if (ctxBranch) {
        if (chartBranchDistribution) chartBranchDistribution.destroy();
        
        chartBranchDistribution = new Chart(ctxBranch, {
            type: "doughnut",
            data: {
                labels: ["Sucursal Centro", "Plaza Norte", "Galerías Sur", "Tienda Online"],
                datasets: [{
                    data: [38, 27, 18, 17],
                    backgroundColor: ["#2563eb", "#10b981", "#f59e0b", "#8b5cf6"],
                    borderWidth: 2,
                    borderColor: "#ffffff"
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: { boxWidth: 12, padding: 14, font: { size: 11 } }
                    },
                    tooltip: {
                        callbacks: {
                            label: (ctx) => ` ${ctx.label}: ${ctx.parsed}% del total`
                        }
                    }
                },
                cutout: "68%"
            }
        });
    }
    
    // 3. CHART TOP CATEGORÍAS O MARCAS
    const ctxCategories = document.getElementById("chartTopCategories");
    if (ctxCategories) {
        if (chartTopCategories) chartTopCategories.destroy();
        
        chartTopCategories = new Chart(ctxCategories, {
            type: "bar",
            data: {
                labels: ["Apple", "Samsung", "Xiaomi", "Motorola", "Accesorios"],
                datasets: [{
                    label: "Unidades Vendidas",
                    data: [64, 48, 35, 29, 92],
                    backgroundColor: ["#0f172a", "#2563eb", "#ea580c", "#0891b2", "#10b981"],
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: "#f1f5f9" }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

// ============================================================
// 7. DASHBOARD GENERAL (VISTA GENERAL)
// ============================================================

function renderDashboard() {
    // Totales rápidos
    const completedSales = appData.sales.filter(s => s.status === "Completada");
    const todayTotal = completedSales.reduce((acc, s) => acc + s.total, 0);
    const lowStockCount = appData.products.filter(p => p.stock <= p.minStock).length;
    
    const dbTotalSales = document.getElementById("dashKpiTotalSales");
    const dbTotalOrders = document.getElementById("dashKpiTotalOrders");
    const dbLowStock = document.getElementById("dashKpiLowStock");
    
    if (dbTotalSales) dbTotalSales.textContent = formatCurrency(todayTotal);
    if (dbTotalOrders) dbTotalOrders.textContent = completedSales.length;
    if (dbLowStock) dbLowStock.textContent = lowStockCount;
    
    // Tabla de órdenes recientes en el dashboard
    const recentOrdersBody = document.getElementById("dashboardRecentOrdersBody");
    if (recentOrdersBody) {
        recentOrdersBody.innerHTML = "";
        appData.sales.slice(0, 5).forEach(s => {
            let statusBadge = s.status === 'Completada' ? 'badge-success' : (s.status === 'Pendiente' ? 'badge-warning' : 'badge-danger');
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>#${s.id}</strong></td>
                <td>${s.customer}</td>
                <td><span class="badge badge-neutral">${s.branch}</span></td>
                <td><strong>${formatCurrency(s.total)}</strong></td>
                <td><span class="badge ${statusBadge}">${s.status}</span></td>
                <td><button class="btn btn-secondary btn-sm" onclick="viewSaleTicket('${s.id}')"><i class="fa-solid fa-receipt"></i></button></td>
            `;
            recentOrdersBody.appendChild(tr);
        });
    }
    
    // Alertas de stock crítico en dashboard
    const lowStockList = document.getElementById("dashboardLowStockList");
    if (lowStockList) {
        lowStockList.innerHTML = "";
        const criticalItems = appData.products.filter(p => p.stock <= p.minStock).slice(0, 4);
        
        if (criticalItems.length === 0) {
            lowStockList.innerHTML = `<p style="color:var(--success); font-size:0.875rem;"><i class="fa-solid fa-circle-check"></i> Todos los productos tienen stock saludable.</p>`;
        } else {
            criticalItems.forEach(item => {
                const div = document.createElement("div");
                div.className = "performance-item";
                div.innerHTML = `
                    <div class="branch-meta">
                        <img src="${item.image}" style="width:36px; height:36px; border-radius:6px; object-fit:cover;">
                        <div>
                            <div class="branch-name">${item.name}</div>
                            <div class="branch-sub">${item.branch} · SKU: ${item.sku}</div>
                        </div>
                    </div>
                    <div class="branch-amount">
                        <span class="badge ${item.stock === 0 ? 'badge-danger' : 'badge-warning'}">
                            ${item.stock === 0 ? 'AGOTADO' : item.stock + ' restantes'}
                        </span>
                        <div><button class="btn btn-primary btn-sm" style="margin-top:4px;" onclick="adjustProductStock('${item.id}', 10)">+10 Reabastecer</button></div>
                    </div>
                `;
                lowStockList.appendChild(div);
            });
        }
    }
}

// ============================================================
// 8. GESTIÓN DE MODALES Y TOASTS
// ============================================================

function initModals() {
    // Cerrar modales con botones de cierre
    document.querySelectorAll(".modal-close-btn, .modal-cancel-btn").forEach(btn => {
        btn.addEventListener("click", closeAllModals);
    });
    
    // Cerrar al hacer clic en el backdrop oscuro
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) closeAllModals();
        });
    });
    
    // Formulario de Producto
    const productForm = document.getElementById("productForm");
    if (productForm) {
        productForm.addEventListener("submit", saveProductFromForm);
    }
    
    // Formulario de Nueva Venta
    const saleForm = document.getElementById("newSaleForm");
    if (saleForm) {
        saleForm.addEventListener("submit", registerNewSale);
    }
    
    // Cambio en selector de producto en modal de venta
    const saleProdSelect = document.getElementById("saleProductSelect");
    const saleQtyInput = document.getElementById("saleQty");
    if (saleProdSelect) saleProdSelect.addEventListener("change", updateSaleModalTotals);
    if (saleQtyInput) saleQtyInput.addEventListener("input", updateSaleModalTotals);
    
    // Buscadores reactivos
    const invSearch = document.getElementById("invSearchInput");
    if (invSearch) invSearch.addEventListener("input", renderInventory);
    
    const invCat = document.getElementById("invCategorySelect");
    if (invCat) invCat.addEventListener("change", renderInventory);
    
    const invStat = document.getElementById("invStatusSelect");
    if (invStat) invStat.addEventListener("change", renderInventory);
    
    const salesSearch = document.getElementById("salesSearchInput");
    if (salesSearch) salesSearch.addEventListener("input", renderSales);
    
    const salesBranch = document.getElementById("salesBranchSelect");
    if (salesBranch) salesBranch.addEventListener("change", renderSales);
    
    const salesStatus = document.getElementById("salesStatusSelect");
    if (salesStatus) salesStatus.addEventListener("change", renderSales);
}

function closeAllModals() {
    document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
}

function openNewUserModal() {
    const modal = document.getElementById("userModal");
    const form = document.getElementById("userForm");
    if (!modal || !form) return;
    
    form.reset();
    document.getElementById("userIdInput").value = "";
    document.getElementById("modalUserTitle").textContent = "Registrar Nuevo Colaborador / Usuario";
    modal.classList.add("active");
}

function editUser(userId) {
    const user = appData.users.find(u => u.id === userId);
    if (!user) return;
    
    document.getElementById("userIdInput").value = user.id;
    document.getElementById("userNameInput").value = user.name;
    document.getElementById("userEmailInput").value = user.email;
    document.getElementById("userRoleSelect").value = user.role;
    document.getElementById("userBranchSelect").value = user.branch;
    document.getElementById("userStatusSelect").value = user.status;
    
    document.getElementById("modalUserTitle").textContent = "Editar Perfil y Rol de Usuario";
    document.getElementById("userModal").classList.add("active");
}

function saveUserFromForm(e) {
    e.preventDefault();
    const id = document.getElementById("userIdInput").value;
    const name = document.getElementById("userNameInput").value.trim();
    const email = document.getElementById("userEmailInput").value.trim();
    const role = document.getElementById("userRoleSelect").value;
    const branch = document.getElementById("userBranchSelect").value;
    const status = document.getElementById("userStatusSelect").value;
    
    if (id) {
        const u = appData.users.find(user => user.id === id);
        if (u) {
            u.name = name;
            u.email = email;
            u.role = role;
            u.branch = branch;
            u.status = status;
            showToast("Perfil de usuario actualizado con éxito", "success");
        }
    } else {
        const newUser = {
            id: "usr-" + Date.now(),
            name,
            email,
            role,
            branch,
            salesCount: 0,
            totalSalesAmount: 0,
            status
        };
        appData.users.push(newUser);
        showToast(`Usuario ${name} registrado con rol ${role}`, "success");
    }
    
    saveState();
    closeAllModals();
    renderUsers();
}

// Sistema de Notificaciones Flotantes (Toasts)
function showToast(message, type = "info") {
    let container = document.querySelector(".toast-container");
    if (!container) {
        container = document.createElement("div");
        container.className = "toast-container";
        document.body.appendChild(container);
    }
    
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    let icon = "fa-circle-info";
    if (type === "success") icon = "fa-circle-check";
    if (type === "warning") icon = "fa-triangle-exclamation";
    if (type === "danger") icon = "fa-circle-xmark";
    
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(50px)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// Exportación simulada de reportes
function exportSalesToCSV() {
    let csvContent = "data:text/csv;charset=utf-8,ID,Fecha,Cliente,Sucursal,Vendedor,MetodoPago,Total,Estado\n";
    appData.sales.forEach(s => {
        csvContent += `${s.id},"${s.date}","${s.customer}","${s.branch}","${s.seller}","${s.paymentMethod}",${s.total},${s.status}\n`;
    });
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Reporte_Ventas_MobileZone_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast("Reporte de ventas exportado exitosamente en formato CSV", "success");
}

function printTicketWindow() {
    window.print();
}

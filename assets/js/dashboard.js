/**
 * SwiftDelivery - Dashboard JavaScript
 * Handles dashboard-specific interactions: Sidebar toggle, tab switching, and chart placeholders.
 */

document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    initDashboardTabs();
});

/**
 * Sidebar Toggle for Mobile
 */
function initSidebar() {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.dashboard-overlay');

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            if (overlay) overlay.classList.toggle('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.add('collapsed');
            overlay.classList.remove('active');
        });
    }
}

/**
 * Tab Switching Logic
 */
function initDashboardTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');

            // Deactivate all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Activate target
            btn.classList.add('active');
            const targetPane = document.getElementById(target);
            if (targetPane) targetPane.classList.add('active');
        });
    });
}

/**
 * Chart Placeholders (Simulating data visualization)
 */
function initCharts() {
    // This would typically use Chart.js or D3
    console.log("Dashboard charts initialized (Placeholders)");
}

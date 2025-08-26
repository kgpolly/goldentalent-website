// 检测是否移动端设备
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") ||
        (navigator.userAgent.indexOf('IEMobile') !== -1) ||
        (window.innerWidth <= 768);
}

// 生成网格项
function generateGridItems() {
    const gridContainer = document.getElementById('gallery');
    gridContainer.innerHTML = '';
    const count = 19;
    const srcs = [
        './img/ylswtdxt.avif', './img/wxfsq.avif', './img/wxjsq.avif',
        './img/bhjp.avif', './img/jdbhjp.avif', './img/uvjp.avif',
        './img/yymz.avif', './img/td.avif', './img/etd.avif',
        './img/njjp.avif', './img/ld4spcsx.avif', './img/bmxdb.avif',
        './img/dphlfwq.avif', './img/swslxt.avif', './img/txwtp.avif',
        './img/ymsmy.avif', './img/vrzhjp.avif', './img/fjgjp.avif',
        './img/ycxfhmz.avif'
    ];

    const captions = [
        "医疗三维头戴系统", "无线发射器", "无线接收器",
        "保护镜片", "加大保护镜片", "UV镜片",
        "医用帽子", "头带", "额头垫",
        "内夹镜片", "9.5m雷电4视频传输线", "表面消毒布",
        "多屏互联服务器", "三维摄录系统", "碳纤维托盘",
        "印模扫描仪", "VR转换镜片（黑）", "防激光镜片",
        "一次性防护面罩"
    ];

    for (let i = 0; i < count; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'gallery-item';
        gridItem.addEventListener('click', function(e) {openLightbox(i)});
        gridItem.innerHTML = `
                    <img src="${srcs[i]}" alt="${captions[i]}">
                    <div class="caption">${captions[i]}</div>
                    <div class="long-description-indicator">
                        更多细节 <i class="fas fa fa-angle-right"></i>
                    </div>
                `;
        gridContainer.appendChild(gridItem);
    }
}

// 更新网格布局
function updateGridLayout() {
    const gridContainer = document.getElementById('gallery');
    const isMobile = isMobileDevice();

    // 设置网格列数
    if (isMobile) {
        gridContainer.style.gridTemplateColumns = 'repeat(2, minmax(280px, 1fr)';
        /*deviceInfo.innerHTML = `设备类型: <span class="highlight">移动设备</span> | 网格布局: <span class="highlight">2列</span> | 屏幕宽度: <span class="highlight">${window.innerWidth}px</span>`;*/
    } else {
        gridContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
        /*deviceInfo.innerHTML = `设备类型: <span class="highlight">桌面设备</span> | 网格布局: <span class="highlight">4列</span> | 屏幕宽度: <span class="highlight">${window.innerWidth}px</span>`;*/
    }
}

// 初始化页面
function initPage() {
    generateGridItems();
    /*updateGridLayout();*/
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', initPage);
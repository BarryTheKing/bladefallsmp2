document.addEventListener('DOMContentLoaded', () => {
    // 1. NAVBAR AKTİF LİNK DEĞİŞİMİ
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Sayfa kaydırıldıkça aktif linki güncelle
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 2. SEKMELERİN (TABS) ÇALIŞMASI
    const tabGroups = document.querySelectorAll('.tabs-container');

    tabGroups.forEach(group => {
        const tabButtons = group.querySelectorAll('.tab-btn');
        const tabPanes = group.querySelectorAll('.tab-pane');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));

                button.classList.add('active');
                
                const targetId = button.getAttribute('data-target');
                group.querySelector(`#${targetId}`).classList.add('active');
            });
        });
    });

    // 3. COPY GAMERTAG BUTONU
    const copyIpBtn = document.getElementById('copyIpBtn');
    
    if (copyIpBtn) {
        copyIpBtn.addEventListener('click', () => {
            const textToCopy = "BarryHarry1505"; 
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalHTML = copyIpBtn.innerHTML;
                copyIpBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
                copyIpBtn.style.borderColor = '#4ade80';
                copyIpBtn.style.color = '#4ade80';
                
                setTimeout(() => {
                    copyIpBtn.innerHTML = originalHTML;
                    copyIpBtn.style.borderColor = '';
                    copyIpBtn.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Kopyalama başarısız: ', err);
            });
        });
    }
});
// Small interactions: mobile nav toggle and CTA smooth scroll
document.addEventListener('DOMContentLoaded', function(){
	// set year
	const y = new Date().getFullYear();
	const el = document.getElementById('year');
	if(el) el.textContent = String(y);

	const toggle = document.querySelector('.menu-toggle');
	const navList = document.querySelector('.nav-list');
	if(toggle && navList){
		toggle.addEventListener('click', function(){
			const expanded = this.getAttribute('aria-expanded') === 'true';
			this.setAttribute('aria-expanded', String(!expanded));
			navList.style.display = expanded ? '' : 'flex';
			navList.style.flexDirection = 'column';
			navList.style.gap = '12px';
			navList.style.alignItems = 'flex-start';
		});
	}

	// Smooth scroll for internal links
	document.querySelectorAll('a[href^="#"]').forEach(a=>{
		a.addEventListener('click', function(e){
			const href = this.getAttribute('href');
			if(href.length>1){
				const tgt = document.querySelector(href);
				if(tgt){
					e.preventDefault();
					tgt.scrollIntoView({behavior:'smooth',block:'start'});
					// close mobile nav if open
					if(window.innerWidth<=640){
						const nav = document.querySelector('.nav-list');
						if(nav) nav.style.display='none';
						const t = document.querySelector('.menu-toggle');
						if(t) t.setAttribute('aria-expanded','false');
					}
				}
			}
		})
	})
});

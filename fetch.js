fetch('https://preview.themeforest.net/item/shaver-barbers-hair-salon-wordpress-theme/full_screen_preview/17769311').then(res=>res.text()).then(t=>console.log(t.split('iframe')[1]))

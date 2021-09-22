module.exports = {
  themeConfig: {
	markdown: {},
        nav: [
            {
            text: 'sirah nabwiy',
            ariaLabel: 'Language Menu',
            items: [
        	    { text: 'kelahiran dan masa kecil', link: '/sirah/kecil/kecil.md' },
        	    { text: 'remaja', link: '/sirah/remaja/remaja.md' },
        	    { text: 'pernikahan', link: '/sirah/pernikahan/' },
        	    { text: 'kenabian', link: '/sirah//kenabian' },
        	   ]
    	    },
    	    {
            text: 'khalifah',
            ariaLabel: 'Language Menu',
            items: [
    		    { text: 'abu bakar ra', link: '/khalifah/abu-bakar/abu-bakar.md' },
    		    { text: 'umar ra', link: '/khalifah/umar/' },
                    { text: 'utsman ra', link: '/khalifah/ustman/' },
                    { text: 'ali ra', link: '/khalifah/ali/' },
                    { text: 'hasan ra', link: '/khalifah/hasan/' }
            	   ]
    	    },
    	    {
    	    text: 'sahabat',
    	    ariaLabel: 'Language Menu',
    	    items: [
    		    { text: 'muhajirin', link: '/muhajirin/' },
    		    { text: 'ansor', link: '/ansor/' }
    		   ]
    	    },
    	    { text: 'about', link: '/about/' }
           ]
    }
}

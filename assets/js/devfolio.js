if(window.innerWidth>= 600)
{ document.addEventListener('DOMContentLoaded', function () {
    let devfolioOptions = {
        buttonSelector: '#devfolio-apply-now',
        key: 'eduthon',
    }

    let script = document.createElement('script');
    script.src = "https://apply.devfolio.co";
    document.head.append(script);

    script.onload = function () {
        new Devfolio(devfolioOptions);
    }

    script.onerror = function () {
        document.querySelector(devfolioOptions.buttonSelector).addEventListener('click', function () {
            window.location.href = 'https://devfolio.co/external-apply/' + devfolioOptions.key;
        });
    }
}); 
}
else{
    let devfolioOptions = {
        buttonSelector: '#devfolio-apply-now',
        key: 'eduthon',
    }
    
    let script = document.createElement('script');
    script.src = "https://apply.devfolio.co";
    document.head.append(script);

    script.onload = function () {
        document.querySelector(devfolioOptions.buttonSelector).addEventListener('click', function () {
            window.open( 
                'https://devfolio.co/external-apply/' +  devfolioOptions.key, "_blank");
        });
    }
    
}
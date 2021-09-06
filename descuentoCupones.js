//Crear sistema de cupones

// Solución #1: arrays y switch

//Crearemos un array con cada uno de nuestros cupones.
//Cambiaremos el input de descuento en HTML por un input de cupones.
//Usaremos un condicional switch para aplicar cierto porcentaje de 
//descuento en nuestros productos dependiendo del cupón que se haya 
//elegido al presionar el botón del formulario.


//Crear un array de cupones
/* const coupons = [
    "des15",
    "des30",
    "des25",
];
 */
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

/* function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    Actualicemos nuestras referencias en el código JavaScript:
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    Crear una variable descuento y asignarle un valor distinto con un switch
    let descuento;

    switch (couponValue) {
        case "des15":
            descuento = 15;
            break;
        case "des30":
            descuento = 30;
            break;
        case "des25":
            descuento = 25;
            break;
    }


    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
 */

//Solución #2: legibilidad, error first y muerte al switch

/* function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    //Actualicemos nuestras referencias en el código JavaScript:
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;


    let descuento;

    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + "no es válido");

    } else if (couponValue === "des15") {
        descuento = 15;
    } else if (couponValue === "des30") {
        descuento = 30;
    } else if (couponValue === "des25") {
        descuento = 25;
    }
    


    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
} */



//Solución #3: arrays y condicionales mucho más inteligentes

const coupons = [
    {
        name: "des15",
        discount: 15,
    },
    {
        name: "des30",
        discount: 30,
    },
    {
        name: "des25",
        discount: 25,
    },
];

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    //Actualicemos nuestras referencias en el código JavaScript:
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;


    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    console.log(couponValue)

    const userCoupon = coupons.find(isCouponValueValid);
    console.log(userCoupon)
    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}
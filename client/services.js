app.service('CartService', function () {

    this.getCart = function () {
        if (localStorage.getItem("cart" === null) {
            localStorage.getItem("cart", JSON.stringify([]));
        }
        return JSON.parse(localStorage.getItem("cart"));
    };

    this.addItem = function (item){
        var list = this.getCart();
        var index = indexOf(item, list);

        if(index == -1) {
            item.quantity = 1;
            list.push(item);
        } else {
            list[index].quantity = list[index].quantity + 1;
        } 
        localStorage.setItem("cart", JSON.stringify(list));
        console.log(list);
    };

    function indexOf(item, list){
        for (var i = 0; i< list.length; i++){
            if(list[i].id === item.id){
                return i;
            }
        }
        return -1;
    }

    this.removeItem = function (id){
        var list = this.getCart();
        console.log(list);

        for (i = 0; i < list.length; i++) {
            if(list[i].id === id) {
                list.splice(i, 1);
                console.log('item deleted')
            }
            localStorage.setItem("cart", JSON.stringify(list));
            console.log(localStorage.carr);
        }
    }
    this.deleteAll = function () {
        localStorage.cart = [];
    };
});
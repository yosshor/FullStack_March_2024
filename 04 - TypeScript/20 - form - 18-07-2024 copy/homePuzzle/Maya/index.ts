    class Coffee{
        coffeeType: string;
        milk: "noMilk" | "wholeMilk" | "soyMilk" | "oatMilk";
        features: "strong" | "addSweetener";    

        constructor(coffeeType: string,  milk: "noMilk" | "wholeMilk" | "soyMilk" | "oatMilk",features: "strong" | "addSweetener" ){
            this.coffeeType = coffeeType;
            this.milk = milk;
            this.features = features;
            }
    }

    const coffees: Coffee[] = [];

    function handleCoffeeOrder(ev: any) {
        try {
            ev.preventDefault();
            console.log(ev);
            const form = ev.target;
            const coffeeType = form.coffeeType.value;
            const milk = form.milk.value;
            const features = form.features;

            features.forEach((feature: any) => {
                if (feature.checked) {
                    console.log('feature', feature.value);
                }
            });
            const coffee = new Coffee (coffeeType, milk, features);
            coffees.push(coffee);
            console.log(coffees);
            form.reset();
        } catch (error) {
            console.error(error);
        }
    }
    function updateCoffeeType(type:string, imageUrl:string) {
    }
    document.addEventListener('DOMContentLoaded', () => {
        const form: HTMLElement | null = document.getElementById('coffeeForm');
        if (form) {
            form.addEventListener('submit', handleCoffeeOrder);
        } else {
            console.error('Form element not found');
        }
    });
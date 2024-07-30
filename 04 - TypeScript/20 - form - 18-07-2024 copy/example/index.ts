class Car {
    model: string;
    company: string;
    year: number;
    url: string;
    id: string;
    gear:"manual" | "automatic" = "manual";
    constructor(model: string, company: string, year: number, url: string, gear: "manual" | "automatic" = "manual") {
        this.model = model;
        this.company = company;
        this.year = year;
        this.url = url;
        this.gear = gear;
        this.id = crypto.randomUUID();
    }
}

const cars: Car[] = [];

function handleAddCar(ev: any) {
    try {
        ev.preventDefault();
        console.log(ev);
        const form = ev.target;
        const model = form.model.value;
        const company = form.company.value;
        const year:number = form.year.valueAsNumber;
        const gear = form.gear.value;
        const features = form.features;
        console.log('features', features);
        features.forEach((feature: any) => {
            if (feature.checked) {
                console.log('feature', feature.value);
            }
        });
        const url = form.url.value;
        const car = new Car(model, company, year, url, gear);
        cars.push(car);
        console.log(cars);
        form.reset();

    } catch (error) {
        console.error(error);

    }
}

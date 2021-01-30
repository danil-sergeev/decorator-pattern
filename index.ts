

abstract class Beverage {
    constructor(
        private description: string,
    ) {
    }

    getDescription(): string {
        return this.description;
    }

    abstract cost(): number;
}

abstract class CondimentDecorator extends Beverage {
    abstract getDescription(): string;
}

/**
 * @description Beverage classes
 */
class Espresso extends Beverage {
    constructor() {
        super("Espresso");
    }

    cost(): number {
        return 1.99;
    }
}

class FlatWhite extends Beverage {
    constructor() {
        super("Flat White");
    }

    cost(): number {
        return .89;
    }
}

class DarkRoast extends Beverage {
    constructor() {
        super("Dark Roast");
    }

    cost(): number {
        return .50;
    }
}

/**
 * @description Concrete decorators
 */

class Mocha extends CondimentDecorator {
    constructor(private beverage: Beverage) {
        super("");
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Mocha";
    }

    cost() {
        return .20 + this.beverage.cost();
    }
}

class Soy extends CondimentDecorator {
    constructor(private beverage: Beverage) {
        super("");
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Soy";
    }

    cost() {
        return .30 + this.beverage.cost();
    }
}

class Whip extends CondimentDecorator {
    constructor(private beverage: Beverage) {
        super("");
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Whip";
    }

    cost() {
        return .10 + this.beverage.cost();
    }
}

/**
 * @description Pattern in action
*/
const _showPrice = (b: Beverage): void => {
    console.info(`${b.getDescription()} $${b.cost()}`);
}

(function () {
    const beverage = new Espresso();
    _showPrice(beverage);

    let beverage2 = new DarkRoast();
    beverage2 = new Mocha(beverage2);
    beverage2 = new Mocha(beverage2);
    beverage2 = new Whip(beverage2);
    _showPrice(beverage2);

    let beverage3 = new FlatWhite();
    beverage3 = new Soy(beverage3);
    beverage3 = new Mocha(beverage3);
    beverage3 = new Whip(beverage3);
    _showPrice(beverage3)
})();

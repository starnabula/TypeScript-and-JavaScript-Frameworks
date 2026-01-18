
class Animal {
    private name: string;

    public constructor(thename: string) {
        this.name = thename;
    }

    protected move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class X {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    protected getTerms() {
        const x: {[name: string]: Function} = {
            abc: () => {console.log('in abc');},
            efy: () => {console.log('in efy');}
        }
        return x;
    }
    public runn() {
        const terms = this.getTerms();
        console.log(`in ${this.name}`);
        for (const term in terms) {
            terms[term]();
        }
        console.log('\n\n');
    }
}

class Y1 extends X{
    constructor(name: string) {
        super(name);
    }
    protected getTerms() {
        const x = super.getTerms();
        x['best'] = () => {console.log(' in best ')};
        return x;
    }
}

class Y2 extends X{
    constructor(name: string) {
        super(name);
    }
    protected getTerms() {
        const x = super.getTerms();
        delete x.efy;
        return x;
    }
}

const Y1ins = new Y1('add new stuff');
const Y2ins = new Y2('remove stuff');

Y2ins.runn();
Y1ins.runn();

export class Vector2 {

    constructor( x, y ) {

        this.x = x || 0;
        this.y = y || 0;
    };

    set( x, y ) {

        this.x = x;
        this.y = y;

        return this;

    };

    copy( v ) {

        this.x = v.x;
        this.y = v.y;

        return this;

    };

    clone() {

        return new Vector2( this.x, this.y );

    };


    add( v1, v2 ) {

        this.x = v1.x + v2.x;
        this.y = v1.y + v2.y;

        return this;

    };

    addSelf( v ) {

        this.x += v.x;
        this.y += v.y;

        return this;

    };

    sub( v1, v2 ) {

        this.x = v1.x - v2.x;
        this.y = v1.y - v2.y;

        return this;

    };

    subSelf( v ) {

        this.x -= v.x;
        this.y -= v.y;

        return this;

    };

    multiplyScalar( s ) {

        this.x *= s;
        this.y *= s;

        return this;

    };

    divideScalar( s ) {

        if ( s ) {

            this.x /= s;
            this.y /= s;

        } else {

            this.set( 0, 0 );

        }

        return this;

    };


    negate() {

        return this.multiplyScalar( -1 );

    };

    dot( v ) {

        return this.x * v.x + this.y * v.y;

    };

    lengthSq() {

        return this.x * this.x + this.y * this.y;

    };

    length() {

        return Math.sqrt( this.lengthSq() );

    };

    normalize() {

        return this.divideScalar( this.length() );

    };

    distanceTo( v ) {

        return Math.sqrt( this.distanceToSquared( v ) );

    };

    distanceToSquared( v ) {

        var dx = this.x - v.x, dy = this.y - v.y;
        return dx * dx + dy * dy;

    };


    setLength( l ) {

        return this.normalize().multiplyScalar( l );

    };

    equals( v ) {

        return ( ( v.x === this.x ) && ( v.y === this.y ) );

    };


    // Rotates the vector around the origin by the specified angle (in degrees).
    // Equivalent to multiplying by the 2×2 rotation matrix.
    rotate( angle ) {
        var x = this.x,
            y = this.y,
            to_radians = Math.PI / 180,
            rad = angle * to_radians,
            sin = Math.sin(rad),
            cos = Math.cos(rad),
            px = x * cos - y * sin;
            py = x * sin + y * cos;

        this.set( px, py );

        return this;

    };

    rotateAroundPivot( pivot, angle ) {

        return this.subSelf(pivot).rotate(angle).addSelf(pivot);

    };

    // Returns the angle that the vector points to.
    angle() {

        return Math.atan2( this.x, this.y );

    };

    flipLeft() {

        return this.set(this.x * -1, this.y);

    };

    flipRight() {

        return this.set(this.x, this.y * -1);

    };
};

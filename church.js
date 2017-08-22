const output = (x) => document.getElementById('out').innerHTML += x + '<br>';

// Unchurch
const decodeNumber  = a => a(b => b + 1)(0)
const decodeBoolean = a => a(true)(false)

// Numbers
const zero  = f => x => x
const one   = f => x => f(x)
const two   = f => x => f(f(x))
const three = f => x => f(f(f(x)))
const four  = f => x => f(f(f(f(x))))
const five  = f => x => f(f(f(f(f(x)))))
const six   = f => x => f(f(f(f(f(f(x))))))
const seven = f => x => f(f(f(f(f(f(f(x)))))))
const eight = f => x => f(f(f(f(f(f(f(f(x))))))))
const nine  = f => x => f(f(f(f(f(f(f(f(f(x)))))))))
const ten   = f => x => f(f(f(f(f(f(f(f(f(f(x))))))))))

// Operations
const succ = n => f => x => f(n(f)(x))
const pred = n => f => x => n( g => h => h(g(f)) )(u => x)(u => u)

// Math Operations
const add = m => n => f => x => m(f)(n(f)(x))
const sub = m => n => (n(pred))(m)
const mul = m => n => f => m(n(f))
const exp = m => n => n(m)
// Throws Uncaught RangeError: Maximum call stack size exceeded:
const div = n => ((f => (x =>x (x)) (x => f(x(x))))( c => n => m => f => x => (d => (n => n( x => (a => b => b))(a => b => a))(d)((f => x => x)(f)(x)) (f(c(d)(m)(f)(x))))((m => n => n(n => f => x => n(g => h => h(g(f)))(u => x)(u => u))(m))(n)(m) )))((n => f => x => f(n(f)(x)))(n))

// Booleans
const True  = a => b => a
const False = a => b => b

const And = p => q => p(q)(p)
const Or  = p => q => p(p)(q)
const Not = p => p(a => b => b)(a => b => a)
const Xor = a => b => a(Not(b))(b)
const If  = p => a => b => p(a)(b)

// Predicates
const isZero = n => n(x => False)(True)
const lessEq = m => n => isZero(sub(m)(n))
const eq = m => n => And(lessEq(m)(n))(lessEq(n)(m))

// Church Pairs
const pair   = x => y => z => z(x)(y)
const first  = p => p( x => y => x )
const second = p => p( x => y => y )

// Church Pair list encodings
const nil    = pair(True)(True)
const isNil  = first
const cons   = h => t => pair(False(pair(h)(t)))
const head   = z => first(second(z))
const tail   = z => second(second(z))

// Combinators
const S = x => y => z => x(z)(y(z))
const K = x => y => x
const I = x => x
const Y = f => x => f(v => x(x)(v))(x => f(v => x(x)(v)))
const U = f => f(f)
const B = S => (K(S))(K)
const C = S => (B(B)(S))(K(K))
const V = x => y => z => z(x)(y);

// General Math use without combinators, reductions or raw lambda
const Fib = rec => n => If(lessEq(n)(one))(one)(x => add(rec(sub(n)(one)))(rec(sub(n)(two)))(x))
const Fac = n => If(isZero(n))(_ => one)(mul(n)(Fac(pred(n))))

// Try for your own, like this:
output( decodeNumber(add(nine)(three)))
output( decodeBoolean(Not(True)) )

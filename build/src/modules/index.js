import A from './a.module'
import B from './b.module'
import * as C from './c.module'
import D from './d.module'
import E from './e.module'
import F from './f.module'

export default {
	A,
	B,
	...C,
	D,
	E,
	F
}

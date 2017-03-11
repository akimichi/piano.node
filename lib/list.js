const expect = require('expect.js');

const LIST = {
  match : (data, pattern) => {
    return data.call(LIST, pattern);
  },
  empty: (_) => {
    return (pattern) => {
      return pattern.empty();
    };
  },
  cons: (head, tail) => {
    return (pattern) => {
      return pattern.cons(head, tail);
    };
  },
  head: (alist) => {
    return LIST.match(alist, {
      empty: (_) => {
        return undefined;
      },
      cons: (head, tail) => {
        return head;
      }
    });
  },
  tail: (alist) => {
    return LIST.match(alist, {
      empty: (_) => {
        return undefined;
      },
      cons: (head, tail) => {
        return tail;
      }
    });
  },
  /* append:: LIST[T] -> LIST[T] -> LIST[T] */
  append: (xs) => {
    return (ys) => {
      return LIST.match(xs, {
        empty: (_) => {
          return ys;
        },
        cons: (head, tail) => {
          return LIST.cons(head, LIST.append(tail)(ys)); 
        }
      });
    };
  },
  /* foldr:: LIST[T] -> T -> FUN[T -> LIST] -> T */
  foldr: (alist) => {
    return (accumulator) => {
      return (glue) => {
        expect(glue).to.a('function');
        return LIST.match(alist,{
          empty: (_) => {
            return accumulator;
          },
          cons: (head, tail) => {
            return glue(head)(LIST.foldr(tail)(accumulator)(glue));
          }
        });
      };
    };
  },
  toArray: (alist) => {
    return LIST.foldr(alist)([])((item) => {
      return (accumulator) => {
        return [item].concat(accumulator); 
      };
    });
  }
}

module.exports = LIST; 

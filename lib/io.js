
const IO = {
  /* unit:: T => IO[T] */
  unit : (any) => {
    return (_) =>  { 
      return any;
    };
  },
  /* flatMap:: IO[T] => FUN[T => IO[U]] => IO[U] */
  flatMap : (instanceA) => {
    return (actionAB) => { // actionAB:: a -> IO[b]
      return IO.unit(IO.run(actionAB(IO.run(instanceA))));
    };
  },
  /* done:: T => IO[T] */
  done : (any) => {
    return IO.unit();
  },
  /* run:: IO[A] => A */
  run : (instance) => {
    return instance();
  },
  /* IO.seq:: IO[a] => IO[b] => IO[b] */
  seq: (instanceA) => {
    return (instanceB) => {
      return IO.flatMap(instanceA)((a) => {
        return instanceB;
      });
    };
  },
  // seqs: (alist) => {
  //   return list.foldr(alist)(list.empty())(IO.done());
  // }
}

module.exports = IO; 
const expect = require('expect.js')
const LIST = require('./list.js')

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
      return (_) => { // IO.unit
          return IO.run(actionAB(IO.run(instanceA)));
      };
      // return IO.unit(IO.run(actionAB(IO.run(instanceA))));
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
  seqs: (alist) => {
    return LIST.foldr(alist)(LIST.empty())(IO.done());
  },
  sendMessage: (output, message) => {
    expect(message).to.be.an('array');
    return (_) => {
      output.sendMessage(message);
    };
  },
}

module.exports = IO; 

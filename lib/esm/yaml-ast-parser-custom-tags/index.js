/**
 * Created by kor on 06/05/15.
 */
export { load, loadAll, safeLoad, safeLoadAll } from './loader';
export { dump, safeDump } from './dumper';
export * from './yamlAST';
function deprecated(name) {
    return function () {
        throw new Error('Function ' + name + ' is deprecated and cannot be used.');
    };
}
export * from './scalarInference';

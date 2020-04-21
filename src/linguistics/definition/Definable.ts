import Definitions from './Definitions';

/**
 * Denotes that an entity is definable - it can be defined.
 * In practice, the Definable interface adds a Definitions field that must be implemented
 * in the inheriting class.
 *
 * @since 12/04/20
 */
interface Definable {
  definitions: Definitions;
}

export default Definable;

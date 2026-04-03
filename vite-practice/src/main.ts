console.log('Hello from empty main.ts file');

// The 'shape' of a student object is defined by the Student interface (a name, grade, and equipment)
/* We can make this interface to help the program be more explicit
  It is more lightweight than a class
interface Student {
  name: string;
  grade: number;
  equipment: string[];
}

  We can also make a distinct type
type Student = {
  name: string;
  grade: number;
  equipment: string[];
}
*/

// We can then update the array accoudingly (not shown)
const students = [
  { name: "Logan", grade: 100, equipment: ['samuri sword', 'shield'] },
  { name: "Wolverine", grade: 90, equipment: ['claws', 'adamantium skeleton'] },
  { name: "Jean Grey", grade: 95, equipment: ['telekinesis', 'telepathy'] }
]
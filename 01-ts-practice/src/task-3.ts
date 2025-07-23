// Типізуйте user.
// Зробіть властивість id тільки для читання.

type User = {
    readonly id: string;
    name: string;
    age: number;
    active: boolean;
}

const user: User = { id: "1", name: "Charlie", age: 25, active: true };

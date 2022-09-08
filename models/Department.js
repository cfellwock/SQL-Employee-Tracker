class Department extends BaseEntity {
    constructor(dbConnection) {
        super(dbConnection);
    }

    findByID() {
        return super.findByID("*", "departments", id); //pass in column, table name then ID
    }

    create(obj) {
        return super.create()
    }
}
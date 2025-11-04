const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } = require('graphql');

const employees = [ // in memory data
    { id: 1, name: 'Rahman', sal: 5000, gender: 'male' },
    { id: 2, name: 'Nitin', sal: 6000, gender: 'male' },
]


const EmployeeType = new GraphQLObjectType({
    name: 'Employee',
    fields: {
        eId: { type: GraphQLInt },
        name: { type: GraphQLString },
        gender: { type: GraphQLString },
        sal: { type: GraphQLInt },
    }
});

// Queries
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        employees: {
            type: new GraphQLList(EmployeeType),
            resolve: () => employees
        },
        employee: {
            type: EmployeeType,
            args: { id: { type: GraphQLInt } },
            resolve: (_, { id }) => employees.filter(emp => emp.id === id)
        }
    }
});

// Mutations
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addEmployee: {
            type: EmployeeType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLInt) },
                name: { type: new GraphQLNonNull(GraphQLString) },
                gender: { type: new GraphQLNonNull(GraphQLString) },
                sal: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve: (_, newEmp) => {
                employees.push(newEmp);
                return newEmp;
            }
        },
        updateEmployee: {},
        deleteEmployee: {}
    }
});

const employeeSchema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

module.exports = employeeSchema;
import TableRow from "./TableRow"
import Pagination from "../../components/Pagination"
const TABLE_HEAD = ["Invoice ID", "Name", "Total", "Due" ,"Action"]
const TABLE_ROWS = [
  {
    id: 123456,
    name: "Rahul",
    totalAmount: 1500,
    initialPayment: 1500,
  },
  {
    id: 123654,
    name: "Rana",
    totalAmount: 800,
    initialPayment: 100,
  },
  {
    id: 12365,
    name: "Himel",
    totalAmount: 5000,
    initialPayment: 500,
  },
  {
    id: 1234566,
    name: "Kayesh",
    totalAmount: 2500,
    initialPayment: 2500,
  },
]

const CollectPayment = () => {
  return (
    <section className="min-w-max">
      <table className="w-full mx-auto bg-indigo-50 min-w-max table-auto text-left md:w-2/3 md:mt-20">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-500 text-white bg-indigo-500 p-4">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ id, name, totalAmount, initialPayment }, index) => {
            const isLast = index === TABLE_ROWS.length - 1
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-500"

            return (
              <TableRow
                key={id}
                id={id}
                name={name}
                totalAmount={totalAmount}
                initialPayment={initialPayment}
                classes={classes}
              />
            )
          })}
        </tbody>
      </table>
      <div className="w-full md:w-2/3 mx-auto">
        <Pagination />
      </div>
    </section>
  )
}

export default CollectPayment

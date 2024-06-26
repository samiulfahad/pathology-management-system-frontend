import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { setKeyword } from "../../store/searchSlice"
import Table from "../../components/Table"
import Search from "../../components/Search"
import Layout from "../../components/Layout"

const Reports = () => {
  const { testName } = useParams()
  const navigate = useNavigate()

  const search = useSelector((state) => state.search)
  const dispatch = useDispatch()

  const testList = ["CBC", "CBC2", "RBS", "XRAY", "ECG", "ULTRA", "RBS2", "XRAY2", "ECG2", "ULTRA2"]
  const isValidTest = testList.includes(testName)

  // Redirect if an invalid test name is passed to the url
  useEffect(() => {
    if (!isValidTest) {
      navigate("/page404")
    }
  }, [testName, testList])

  const onSearch = () => {
    // Add logic to handle search based on searchKeyword and searchType
    console.log("Search keyword:", search.keyword)
    console.log("Search type:", search.type)
    dispatch(setKeyword(""))
  }

  const columns = ["Invoice ID", "Name"]
  const data = [
    ["018276td45", "Samiul Fahad", false],
    ["018276td45", "Ratul", false],
    ["018276td45", "Sharukh", true],
    ["018276td45", "Mithunnn", true],
  ]

  return (
    <Layout>
      <section className="bg-blue-gray-200 min-h-screen">
        <div className="w-80 mx-auto py-4">
          <div className="text-xl py-4 font-bold mx-auto text-center"> Manage All {testName.toUpperCase()} Reports</div>
          <Search onSearch={onSearch} />
        </div>
        <div className="flex flex-col justify-between items-center w-full md:w-4/5 mx-auto gap-4">
          <div className="w-full md:w-4/5">
            <Table columns={columns} data={data} testName={testName} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Reports

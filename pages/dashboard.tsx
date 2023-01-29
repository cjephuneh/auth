import Head from 'next/head'
const DashboardPage = () => {
    return (
      <>
          <Head>
            <title> Dashboard </title>
          </Head>
          <div className="flex py-2 container mx-auto">
            <div className="text-gray-600 px-12 py-24 mt-24 overflow-y-hidden mx-auto">
              <h2 className="text-2xl font-semibold">You are logged in enjoy !</h2>
            </div>
          </div>
      </>
    );
  };
  
  export default DashboardPage;
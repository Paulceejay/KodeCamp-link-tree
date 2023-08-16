import "./Main.css"

const Main = () => {
    const mainDatas = [
        {name: "Twitter Link", id: 1},
        {name: "KodeCamp Team", id: 2},
        {name: "KodeCamp Books", id: 3},
        {name: "Python Books", id: 4},
        {name: "Background Check For Coders", id: 5},
        {name: "Design Books", id: 6},
    ]
    return (
      <main className="main">
        {mainDatas.map((data) => (
          <div className="" key={data.id}>
            <p>{data.name}</p>
          </div>
        ))}
      </main>
    );
}

export default Main
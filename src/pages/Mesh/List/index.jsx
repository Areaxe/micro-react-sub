import { Link } from 'react-router-dom'
const MeshList = (props) => {
    const datas = [
        { name: 'mesh1', id: '123' },
        { name: 'mesh2', id: '1231' },
        { name: 'mesh3', id: '1232' },
        { name: 'mesh4', id: '1233' },
        { name: 'mesh5', id: '1234' },
    ]
    return <ul>
        {
            datas.map(item => <li key={item.id}>
                <Link to={`/mesh/${item.id}`}>{item.name}</Link>
            </li>)
        }
        <li>
            <Link to="/mesh/test/route/123">test
            </Link>
        </li>
    </ul>
}

export default MeshList;
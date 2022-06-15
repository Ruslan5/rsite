import Tree from 'react-vertical-tree'

const ProductVert = () => {
    const  data = [
        {id: 1, name: <a href="page2.html">Переходим</a>, parent: null, children: [
                {id: 2, parent: {id: 1}, name: 'subcompany1', children: []},
                {id: 3, parent: {id: 1}, name: 'subcompany2', children: [
                        {id: 4, parent: {id: 3}, name: 'example-company', children: []}
                    ]},
                {id: 5, parent: {id: 1}, name: 'company2', children: []},
                {id: 6, parent: {id: 1}, name: 'company3', children: []}
            ]}
    ]
    return (
        <>
                    <Tree data={data} />
        </>
    );
}

export default ProductVert
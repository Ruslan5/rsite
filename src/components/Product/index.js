import './index.scss'
import data from "./data";
import Tree from 'react-d3-tree'

const Product = () => {

  return (
    <>
      <div className="container about-page">
        <Tree
          data={data}
          translate={{x: 600, y: 50}}
          orientation={'vertical'}
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
          // TreeNodeEventCallback={preventDefault("node__root")}
          dimensions={{
            width: 1200,
            height: 500
          }}
          separation={{
            siblings: 1,
            nonSiblings: 1
          }}

          onNodeClick={e => console.log(e)}
          onRelationshipClick={e => console.log(e)}
        />

      </div>
    </>
  );
}

export default Product
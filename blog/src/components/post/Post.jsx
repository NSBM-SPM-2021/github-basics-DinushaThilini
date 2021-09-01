import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
       postjsxhbjhbcnabdjhcgbjkbcmnb chjsj bmzn kbcjn 
       dncmndk bkjdnxvcadmcsnjkdcjhdkjckdhksnjxukc
       jsncbj kwjdi lnxjmlcxji njbnsmhs 
       nckncdanckhdj mgdyoqdiuhcs nbjc
      </p>
    </div>
  );
}

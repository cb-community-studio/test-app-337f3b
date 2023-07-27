import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";


const SingleAsdfghgfdsPage = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("asdfghgfds")
            .get(urlParams.singleAsdfghgfdsId, { query: { $populate: [] }})
            .then((res) => {
                setData(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Asdfghgfds", type: "error", message: error.message || "Failed get asdfghgfds" });
            });
    }, []);

    const goBack = () => {
        history.replace("/asdfghgfds");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Asdfghgfds</h3>
                </div>
                <p>asdfghgfds/{urlParams.singleAsdfghgfdsId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm">newField</label>
                    <p className="m-0" >{data?.newField}</p>
            
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleAsdfghgfdsPage);

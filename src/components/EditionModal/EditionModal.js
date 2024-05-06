import React, { useState, useEffect } from "react";
import Close from "../../assets/images/icon_close_modal.svg";
import ScrollArea from "react-scrollbar";
import WETH from "../../assets/images/weth-icon.svg";
import "./editionModal.scss";
import { useNavigate } from "react-router-dom";

function EditionModal(props) {
    const navigate = useNavigate();
    const [edition, setEdition] = useState([]);

    useEffect(() => {
        handleEditionLoop();

    }, []);

    useEffect(() => {
        if (props.batchEdActive && edition.length > 0) {
            var targetElm = document.querySelector('.scroll_view')
            targetElm.scrollIntoView({ behavior: "smooth" })
        }
    }, [edition])

    const handleEditionChange = (e) => {
        props.handleClose();
    };

    const handleEdition = (item) => {
        props.setBatchEdActive(item.batch_count);
        props.setCurrentEditionPrice(item.price);
        props.handleBidHistory(item.batch_count);
        props.handleHighestBid(item.batch_count);
        props.handleCheckTopBid(item.batch_count)
        props.handleCheckUserBidNft(item.batch_count)
        navigate(`/nft/${props.slug}/${props.slugId}/${item.batch_count}`);
    };

    const handleEditionLoop = (batch_row) => {
        let allNftBatches = props.allNftBatches ? props.allNftBatches : [];
        let all_editions = {};
        allNftBatches.map(function (n) {
            Object.assign(all_editions, n.edition_bid);
        });
        let batches = [];
        let batchObj = Object.keys(all_editions).map(function (key) {
            let obj = {
                batch_count: parseInt(key),
                price: all_editions[key],
            };
            batches.push(obj);
        });
      
        setEdition(batches);
    };


    return (
        <>
            <div className="modal modal--active" id="modaledition">
                <div className="modal__dialog">
                    <div className="modal__content">
                        <button
                            type="button"
                            className="btn btn--icon btn--close-modal"
                            data-action="closeModal"
                            onClick={() => props.handleClose()}
                        >
                            <img src={Close} alt="Close" />
                        </button>
                        <div className="modal__header">
                            <h3>Available NFT Editions</h3>
                        </div>
                        <div className="modal__body">
                            <p className="form_label">
                                Choose the edition you want to bid on
                            </p>
                            <div className="form_wrapper">
                                <input
                                    type="radio"
                                    name="edition"
                                    id="index3"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditionModal;


// baner button section
const bannerSection = document.getElementById("banner");

const ticketSection = document.getElementById("buy-ticket");

ticketSection.onclick = function(){
    const ticketSectionPosition = bannerSection.offsetTop;
    window.scrollTo(0, ticketSectionPosition);
};

// start sell

let seatQuan = 0;
let totalCost = 0;
const seatLimit = 3;
let freeseat = 40;

const allSeatBtn = document.getElementsByClassName("seatBtn");
const applyBtn = document.getElementById("apply")
for (const btn of allSeatBtn) {
    btn.addEventListener("click", function () {
        if (!btn.classList.contains("bg-[#1cd100]")) {
            if (seatQuan <= seatLimit) {
                btn.classList.add("bg-[#1cd100]", "text-white");
                seatQuan++;
                freeseat--;
                document.getElementById("seatQuan").innerText = seatQuan;
                document.getElementById("leftSeat").innerText = freeseat;

                const priceContainer = document.getElementById("priceContainer");
                const div = document.createElement("div");
                div.classList.add("flex", "justify-around");
                div.innerHTML = `
                    <p>${btn.textContent}</p>
                    <p>Economy</p>
                    <p>550</p>
                `;
                priceContainer.appendChild(div);

                totalCost += 550;
                document.getElementById("totalCost").innerText = totalCost;
                document.getElementById("grandTotal").innerText = totalCost;


                if (seatQuan === 4) {
                    applyBtn.removeAttribute("disabled");
                }


            }
            else {
                alert("You can only select up to 4 seats.");
            }
        } else {
            alert("You have already selected this seat.");
        }
    });
}

document.getElementById("apply").addEventListener("click", function () {
    const couponInput = document.getElementById("inputQupon").value.trim().toLowerCase();
    const total = parseInt(document.getElementById("totalCost").innerText);
    const discountCon = document.getElementById("discountCon");
    const discountField = document.getElementById("discountFild");
    const Discount = document.getElementById("Discount");
    const grandTotal = document.getElementById("grandTotal");

    if (couponInput === "new15") {
        const new15Discount = total * 15 / 100;
        Discount.innerText = new15Discount;
        grandTotal.innerText = total - new15Discount;
        discountCon.classList.remove("hidden");
        discountField.classList.add("hidden")
    } else if (couponInput === "couple 20") {
        const couple20Discount = total * 20 / 100;
        Discount.innerText = couple20Discount;
        grandTotal.innerText = total - couple20Discount;
        discountCon.classList.remove("hidden");
        discountField.classList.add("hidden")
    } else if (couponInput === " ") {
        alert("Please provide a valid coupon code to proceed to the next step.")
    }
    else {
        alert("This coupon code is not valid. Please provide a valid coupon code.")
        discountField.classList.add("hidden");

    }
});

document.getElementById("next").addEventListener('click', function () {
    const inputnumber = document.getElementById("number").value;


    if (seatQuan !== 0 && inputnumber.trim() !== '') {
        document.location = '#my_modal_8';
    } else {
        alert("Please book a seat and fill all information.");
    }
});


function nextBtnDisAndEna() {
    const nextButton = document.getElementById("next");
    const inputnumber = document.getElementById("number").value;
    nextButton.disabled = !(seatQuan > 0 && inputnumber.trim() !== '');

}

document.getElementById("number").addEventListener('input', nextBtnDisAndEna);
nextBtnDisAndEna();


/**
 * Primary Menu Toggle (Hamburger Menu)
 */

const btnPrimaryMenu = document.querySelector('[data-action="togglePrimaryMenu"]');
const navPrimary = document.querySelector(".nav-primary");

if (btnPrimaryMenu && navPrimary) {
	btnPrimaryMenu.addEventListener("click", () => {
		btnPrimaryMenu.classList.toggle("is-active");
		navPrimary.classList.toggle("is-visible");
		const menuIcon = "images/icon_menu.svg";
		const closeIcon = "images/icon_close.svg";
		btnPrimaryMenu.querySelector("img").src = navPrimary.classList.contains("is-visible")
			? closeIcon
			: menuIcon;
		document.body.style.overflow = navPrimary.classList.contains("is-visible") ? "hidden" : "";
		btnPrimaryMenu.blur();

		// close secondary menu (if open)
		const menuSecondary = document.getElementById("secondaryMenu");
		if (menuSecondary && menuSecondary.classList.contains("is-active")) {
			menuSecondary.classList.remove("is-active");
		}
	});
}

/**
 * Button link navigation
 */

const btnLinks = document.querySelectorAll("[data-href]");
if (btnLinks.length) {
	btnLinks.forEach((btnLink) => {
		btnLink.addEventListener("click", (e) => {
			e.preventDefault();
			e.stopPropagation();
			location.href = btnLink.dataset.href;
		});
	});
}

/**
 * Open Modal
 */
const btnsOpenModal = document.querySelectorAll("[data-action='openModal']");
if (btnsOpenModal.length) {
	btnsOpenModal.forEach((btnOpenModal) => {
		btnOpenModal.addEventListener("click", (e) => {
			e.stopPropagation();
			e.preventDefault();
			const modalId = btnOpenModal.dataset.modalTarget;
			const modal = document.getElementById(modalId);
			modal.classList.add("modal--active");
		});
	});
}

/**
 * Close Modal
 */

const btnsCloseModal = document.querySelectorAll("[data-action='closeModal']");
if (btnsCloseModal.length) {
	btnsCloseModal.forEach((btnCloseModal) => {
		btnCloseModal.addEventListener("click", (e) => {
			e.stopPropagation();
			e.preventDefault();
			const modal = btnCloseModal.closest(".modal");
			modal.classList.remove("modal--active");
		});
	});
}

/**
 * Your Account Menu
 */

const btnMenuSecondary = document.querySelector('[data-action="toggleSecondaryMenu"]');
btnMenuSecondary &&
	btnMenuSecondary.addEventListener("click", () => {
		const menuSecondary = document.getElementById("secondaryMenu");
		menuSecondary.classList.toggle("is-active");
	});

/**
 * Counter
 */

class Counter {
	constructor(counterEl) {
		this.counterEl = counterEl;
		this.btnDecrement = this.counterEl.querySelector('[data-action="counter-decrement"]');
		this.btnIncrement = this.counterEl.querySelector('[data-action="counter-increment"]');
		this.counterValueField = this.counterEl.querySelector(".counter__value");
		this.minValue = +this.btnDecrement.dataset.min;
		this.maxValue = +this.btnIncrement.dataset.max;

		this.cryptoRate = +this.counterValueField.dataset.cryptoRate;
		this.fiatRate = +this.counterValueField.dataset.fiatRate;
		this.subtotalCryptoEl = document.getElementById("subtotalCryptoAmt");
		this.subtotalFiatEl = document.getElementById("subtotalFiatAmt");
		this.totalCryptoEl = document.getElementById("totalCryptoAmt");
		this.totalFiatEl = document.getElementById("totalFiatAmt");
		this.value = +this.counterValueField.value;

		this.eventListeners();
	}

	eventListeners() {
		this.btnDecrement.addEventListener("click", this.decrement.bind(this));
		this.btnIncrement.addEventListener("click", this.increment.bind(this));
	}

	decrement() {
		let curValue = +this.counterValueField.value;
		curValue > this.minValue && curValue--;
		this.setCounterValue(curValue);
	}

	increment() {
		let curValue = +this.counterValueField.value;
		curValue < this.maxValue && curValue++;
		this.setCounterValue(curValue);
	}

	setCounterValue(newValue) {
		this.counterValueField.value = newValue;
		newValue === this.minValue
			? this.disableBtn(this.btnDecrement)
			: this.enableBtn(this.btnDecrement);
		this.updateTotals();
	}

	updateTotals() {
		const cryptoValue = this.counterValueField.value * this.cryptoRate;
		const fiatValue = this.counterValueField.value * this.fiatRate;

		const updatedFields = document.querySelectorAll(
			'[data-label="Total"], [data-label="Subtotal"]'
		);

		// Update subtotals
		this.subtotalCryptoEl.innerHTML = `${cryptoValue.toFixed(2)} SOL`;
		this.subtotalFiatEl.innerHTML = `= ${fiatValue.toFixed(2)} USD`;

		// Update totals
		this.totalCryptoEl.innerHTML = `${cryptoValue.toFixed(2)} SOL`;
		this.totalFiatEl.innerHTML = `= ${fiatValue.toFixed(2)} USD`;

		updatedFields.forEach((updatedField) => {
			updatedField.classList.add("highlight");
		});

		setTimeout(() => {
			updatedFields.forEach((updatedField) => {
				updatedField.classList.remove("highlight");
			});
		}, 750);
	}

	disableBtn(btn) {
		btn.setAttribute("disabled", "disabled");
		this.counterValueField.style.color = "red";
	}

	enableBtn(btn) {
		this.btnDecrement.removeAttribute("disabled");
		this.counterValueField.style.color = "unset";
	}
}

const nftQty = document.getElementById("nftQty");
nftQty && new Counter(nftQty);

/**
 * Payment Methods
 */

const paymentMethods = document.querySelectorAll("[name='paymentMethod']");
if (paymentMethods.length) {
	paymentMethods.forEach((paymentMethod) => {
		const creditCardInfo = document.getElementById("creditCardInfo");
		const solanaInfo = document.getElementById("solanaInfo");

		paymentMethod.addEventListener("change", (e) => {
			const isCreditCard = e.target.id === "creditCard";
			const isSolana = e.target.id === "solana";

			creditCardInfo.style.display = isCreditCard ? "flex" : "none";
			solanaInfo.style.display = isSolana ? "flex" : "none";
		});
	});
}

/**
 * Toggle Button
 */

const toggle = document.querySelector(".toggle");

if (toggle) {
	toggle.addEventListener("click", (e) => {
		const isLabel = e.target.classList.contains("toggle__label");
		const isLabelSelected = e.target.classList.contains("selected");
		if (isLabel && isLabelSelected) return;

		// change state
		const toggleLabels = toggle.querySelectorAll(".toggle__label");
		const btnToggle = toggle.querySelector(".toggle__btn");
		btnToggle.classList.toggle("selected");
		toggleLabels.forEach((toggleLabel) => {
			toggleLabel.classList.toggle("selected");
		});
	});
}

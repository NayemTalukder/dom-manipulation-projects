// [Start] <> Function Part
const getWithTag = (nodes, tag) => {
  const newElement = document.createElement(tag)
  nodes.forEach(element => {
    newElement.appendChild(element)
  })
  return newElement
}

const flexDisplay = (element, flexDirection) => {
  Object.assign(element.style, {
    display: 'flex',
    flexDirection: flexDirection
  })
}
// [End] <> Function Part


// [Start] <> Change Fav Icon 
const favIcon = document.querySelector('link[rel="shortcut icon"]')

favIcon.href = 'https://www.buyspares.co.uk/images/logos2/75/dyson.jpg'
// [End] <> Change Fav Icon 


// --------------------- [Upper Section] ------------------
// [Start] <> [Upper Section]
// [Start] <> [Upper Section] => {Left Part}
const proDetails = document.querySelector('.product-detail')
const colContent = proDetails.querySelector('.col-content')
colContent.style.width = '100%'

// remove product-reviews-mobile part
const proRevMob = colContent.querySelector('.product-reviews-mobile')
proRevMob.parentNode.removeChild(proRevMob)

// [Start] <> [Upper Section] => Adjust Grid
const proBasicInfoInner = colContent.querySelector('.col-sm-8.col-md-12')
proBasicInfoInner.classList.remove('col-sm-8','col-md-12')
proBasicInfoInner.classList.add('col-12')
// [END] <> [Upper Section] => Adjust Grid

// [Start] <> [Upper Section] => {Left Part} --> Adjust Product Images
const proImages = proDetails.querySelector('.product-images')
const proMainImages = proDetails.querySelector('.product-main-image')
proImages.style.width = '33%'
proMainImages.style.border = 'none'
flexDisplay(proImages, 'row')

const enlarge = proImages.querySelector('#options')
enlarge.parentNode.removeChild(enlarge)

// [Start] <> [Upper Section] => {Left Part} --> Adjust View Product Video
const rightArrow = document.createElement('span')
rightArrow.classList.add('arrow', 'right')
rightArrow.style.marginRight = '.2vw'

const ViewProVideoText = document.createElement('span')
ViewProVideoText.classList.add('productVideo')
ViewProVideoText.innerHTML = 'View Product Video'

const productVideo = getWithTag([rightArrow, ViewProVideoText], 'a')
productVideo.classList.add('center')
productVideo.style.color = '#000'
productVideo.style.fontSize = '.9vw'
productVideo.style.marginTop = '.6vw'
productVideo.style.cursor = 'pointer'

const productVideoCell = document.querySelector('.main-image-container-cell')
productVideoCell.appendChild(productVideo)

const howtoVideo = document.querySelector('.video-container')
howtoVideo.setAttribute('id', 'howtoVideo');

document.querySelector('.productVideo').addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('selected'));
    document.querySelector('div[data-id="descriptionTab"]').classList.add('selected');
    document.querySelectorAll('.tab-panel').forEach(t => t.classList.add('hidden'));
    document.querySelector(`#descriptionTab`).classList.remove('hidden');
    document.getElementById('howtoVideo').scrollIntoView();
});
// [End] <> [Upper Section] => {Left Part} --> Adjust View Product Video
// [End] <> [Upper Section] => {Left Part} --> Adjust Product Images
// [End] <> [Upper Section] => {Left Part}


// [Start] <> [Upper Section] => {Middle Part}
// [Start] <> [Upper Section] => {Middle Part} --> Adjust Product Description
const proDescription = proDetails.querySelector('.product-description')
proDescription.style.width = '33%'

const heading = document.getElementsByTagName("h1")[0]
const headingNew = getWithTag([heading.firstChild], 'h1')
headingNew.style.fontSize = '1.9vw'
proDescription.insertBefore(headingNew, proDescription.firstChild);
heading.parentNode.removeChild(heading)


// [Start] <> [Upper Section] => {Middle Part} --> Modify product rating
const proRating = proDetails.querySelector('.product-rating')
const totalRating = proRating.querySelector('a span')
const totalRatingWrapper = document.createElement('a')
totalRatingWrapper.href = '#reviews'
totalRatingWrapper.innerHTML = `(${totalRating.innerHTML})`

const ratingSum = proRating.querySelector('.rating-summary')
ratingSum.innerHTML = ''
ratingSum.appendChild(totalRatingWrapper)

document.querySelector('.rating-summary').addEventListener('click', () => {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('selected'));
  document.querySelector('div[data-id="reviewsTab"]').classList.add('selected');
  document.querySelectorAll('.tab-panel').forEach(t => t.classList.add('hidden'));
  document.querySelector(`#reviewsTab`).classList.remove('hidden');
  document.getElementById('reviewsTab').scrollIntoView();
});
// [End] <> [Upper Section] => {Middle Part} --> Modify product rating


// [Start] <> [Upper Section] => {Middle Part} --> Add Logo beside rating summary
const logo = document.querySelector('.logo')
const clonedLogo = logo.cloneNode(true)
const logoContainer = document.createElement('span')
logoContainer.innerHTML = clonedLogo.innerHTML
logoContainer.style.marginRight = '.7vw'
const insertBefore = proDetails.querySelector('.product-rating span')
proRating.insertBefore(logoContainer, insertBefore)
// [End] <> [Upper Section] => {Middle Part} --> Add Logo beside rating summary


// [Start] <> [Upper Section] => {Middle Part} --> Delete extra details
const description = proDescription.querySelector('.description')
const leadDescription = description.querySelector('.lead')
leadDescription.style.fontSize = '1vw'
description.innerHTML = ''
description.appendChild(leadDescription)
// [End] <> [Upper Section] => {Middle Part} --> Delete extra details

// [Start] <> [Upper Section] => {Middle Part} --> Add sort specs
const specs = proDetails.querySelectorAll('.product-further-info .panel-body span ul li')
const firstSpec = specs[0].cloneNode(true)
const secondSpec = specs[1].cloneNode(true)
secondSpec.innerHTML = 'Bos ' + secondSpec.innerHTML
const specsContainer = getWithTag([firstSpec, secondSpec], 'div')
specsContainer.style.fontSize = '.9vw'
specsContainer.style.marginBottom = '1vw'
specsContainer.classList.add('space-between-specs')
proDescription.appendChild(specsContainer)
// [End] <> [Upper Section] => {Middle Part} --> Add sort specs

// add Stock Number
proDescription.appendChild(heading.lastChild)
// [End] <> [Upper Section] => {Middle Part} --> Adjust Product Description
// [End] <> [Upper Section] => {Middle Part}


// [Start] <> [Upper Section] => {Right Part}
// [Start] <> [Upper Section] => {Right Part} --> Adjust col basket element
const colBasket = proDetails.querySelector('.col-basket')

const colBasElement = document.createElement('div')
colBasElement.id = 'col-basket-element'
colBasElement.classList.add('col-basket-element')
colBasElement.style.width = '33%'
colBasElement.style.float = 'left'
colBasElement.style.paddingLeft = '3vw'
flexDisplay(colBasElement, 'column')

// [Start] <> [Upper Section] => {Right Part} --> Adjust Quantity & price Block
// Quantity Block
const qty = document.createElement('div')
qty.innerHTML = `QTY`
qty.style.fontSize = '2.2vw'

const quantityBoxWrapper = document.createElement('div')
quantityBoxWrapper.classList.add('easy-number-wrapper')
const quantityBox = colBasket.querySelector('#quantity')
quantityBox.style.width = '3.5vw'
quantityBox.style.alignItems = 'center'
quantityBoxWrapper.style.marginRight = '3vw'
quantityBoxWrapper.appendChild(quantityBox)

const quantityBlock = getWithTag([qty, quantityBoxWrapper], 'div')
flexDisplay(quantityBlock, 'row')
quantityBlock.style.justifyContent = 'space-between'
quantityBlock.style.flex = '1'
quantityBlock.style.alignItems = 'center'

// Price Block
const priceLarge = colBasket.querySelector('.price-large')
priceLarge.style.fontSize = '3vw'
priceLarge.style.fontWeight = '900'

const discount = colBasket.querySelector('.discount')
discount.innerHTML = discount.innerHTML.slice(6)
discount.innerHTML = discount.innerHTML.charAt(0).toUpperCase() + discount.innerHTML.slice(1)
discount.style.fontSize = '.9vw'
discount.style.alignSelf = 'center'

const priceBlock = getWithTag([priceLarge, discount], 'div')
flexDisplay(priceBlock, 'row')
priceBlock.style.justifyContent = 'space-between'
priceBlock.style.flex = '1'

const quantityPriceBlock = getWithTag([quantityBlock, priceBlock], 'div')
flexDisplay(quantityPriceBlock, 'row')
quantityPriceBlock.style.marginBottom = '1vw'
colBasElement.appendChild(quantityPriceBlock)
// [End] <> [Upper Section] => {Right Part} --> Adjust Quantity & price Block

// [Start] <> [Upper Section] => {Right Part} --> Adjust In Stock - Order Within Part
const orderWithin = colBasket.querySelector('.product-countdown-wrapper')
orderWithin.style.padding = '2vw'
const orderWithinText = orderWithin.querySelector('.desktop-countdown p')
orderWithinText.innerHTML = 'In Stock -' + orderWithinText.innerHTML 
colBasElement.appendChild(orderWithin)

// timer Adjusted below before Adding Additional Style Sheet

// [End] <> [Upper Section] => {Right Part} --> Adjust In Stock - Order Within Part

// [Start] <> [Upper Section] => {Right Part} --> Adjust Buy Now Button
const buyNowMain = colBasket.querySelector('button[name="submit"]')
const buyNow = buyNowMain.cloneNode(true);
buyNow.style.marginBottom = '1.6vw'
buyNow.style.width = '100%'
buyNow.style.padding = '1vw'

const orderNowform = colBasket.querySelector('form');
const newOrderNowform = document.createElement('form')
newOrderNowform.action = orderNowform.action
newOrderNowform.method = orderNowform.method
newOrderNowform.appendChild(buyNow)

colBasElement.appendChild(newOrderNowform)
// [End] <> [Upper Section] => {Right Part} --> Adjust Buy Now Button

// [Start] <> [Upper Section] => {Right Part} --> Check Appliance Button
const checkAppliance = colBasket.querySelector('button[name="submit"]')
checkAppliance.innerHTML = 'Check This Part Fit My Appliance'
checkAppliance.classList.remove('btn-primary')
checkAppliance.classList.add('btn-secondary')
checkAppliance.style.height = '3.5vw'
checkAppliance.style.border = '1px solid gray'
checkAppliance.style.marginBottom = '2vw'
colBasElement.appendChild(checkAppliance)

//remove fit Appliance
const fitAppliance = colContent.querySelector('.product-will-it-fit')
fitAppliance.parentNode.removeChild(fitAppliance)

// Multi Buy Tag
const multiBuy = colBasket.querySelector('.multi-buy')
multiBuy.style.listStyle = 'none'
multiBuy.style.paddingLeft = '1vw'
multiBuy.style.fontSize = '1.1vw'
multiBuy.style.fontWeight = '700'

const multiBuyTag = document.createElement('span')
multiBuyTag.classList.add('multi-buy-tag')

const multiBuyDiv = getWithTag([multiBuyTag, multiBuy], 'div')
multiBuyDiv.style.display = 'flex'
colBasElement.appendChild(multiBuyDiv)
// [End] <> [Upper Section] => {Right Part} --> Check Appliance Button

// Append modified col baskel element
proBasicInfoInner.appendChild(colBasElement)
// [End] <> [Upper Section] => {Right Part} --> Adjust col basket element


// [Start] <> [Upper Section] => Remove Some Unnecessary Stufs
//remove col basket
colBasket.parentNode.removeChild(colBasket)

// remove basket-col-content-tablet part
const basColConTab = colContent.querySelector('#basket-col-content-tablet')
basColConTab.parentNode.removeChild(basColConTab)

// remove basket-col-content-mobile
const basColConMob = colContent.querySelector('#basket-col-content-mobile')
basColConMob.parentNode.removeChild(basColConMob)
// [End] <> [Upper Section] => Remove Some Unnecessary Stufs
// [End] <> [Upper Section] => {Right Part}
// [End] <> [Upper Section]


// --------------------- Lower Section ------------------------------
// [Start] <> [Lower Section]
// [Start] <> [Lower Section] => Creating Tab View
const tabContainer = document.createElement('section')
tabContainer.classList.add('product-further-info')

const descriptions = document.querySelector('#product-info-accordion')
// remove description section-heading
const desSecHeading = descriptions.querySelector('.section-heading')
desSecHeading.parentNode.removeChild(desSecHeading)

const reviews = document.querySelector('#reviews')
const productQA = document.querySelector('#ask-and-answer')

// [Start] <> [Lower Section] => Creating Tab View --> Re-design reviewList
const reviewList = document.querySelector('.reviews-listing')
const allReviews = document.querySelectorAll('.review')
allReviews[allReviews.length-1].classList.add('no-border')
allReviews.forEach(e => {
  const reviewedByTxt = document.createElement('span')
  reviewedByTxt.innerHTML = 'Reviewed by '

  const author = e.querySelector('.reviewer')
  author.innerHTML = author.innerHTML + ', '
  author.style.margin = '0 .5vw'

  const date = e.querySelector('.heading small')
  date.style.fontSize = '.8vw'

  const reviewedBy = getWithTag([reviewedByTxt, author, date], 'div')
  reviewedBy.style.fontSize = '.8vw'
  reviewedBy.style.alignItems = 'center'
  flexDisplay(reviewedBy, 'row')

  e.appendChild(reviewedBy)
})
// [End] <> [Lower Section] => Creating Tab View --> Re-design reviewList

// [Start] <> [Lower Section] => Creating Tab View --> Adjust Q&A Tab Content
const qa = document.querySelector('#qa-panel')

const qaContent = `
<div class="panel panel-default" id="ask-and-answer">
    <div class="panel-heading" role="tab" id="qa-panel-heading" style="display: none;">
        <h4 class="panel-title">
            <a class="panel-trigger collapsed" role="button" data-toggle="collapse" data-parent="#product-info-accordion" href="#qa-panel" aria-expanded="false" aria-controls="qa-panel">
                Ask &amp; Answer
            </a>
        </h4>
    </div>
    <div class="section-heading alt">
        <h2 class="heading">
            Ask &amp; Answer
        </h2>
    </div>
    ${qa.innerHTML}
<div>
`
// [End] <> [Lower Section] => Creating Tab View --> Adjust Q&A Tab Content

// [Start] <> [Lower Section] => Creating Tab View --> Design Tab Container
tabContainer.innerHTML = `
<div class='tab-container' >
  <div class='tab-button-container' >
    <div data-id="descriptionTab" class="tab selected">Description</div>
    <div data-id="reviewsTab" class="tab">Reviews</div>
    <div data-id="producQATabTab" class="tab">Product Q&A</div>
  </div>
  <div id="descriptionTab" class="tab-panel">${descriptions.innerHTML}</div>
  <div id="reviewsTab" class="tab-panel hidden">${reviewList.innerHTML}</div>
  <div id="producQATabTab" class="tab-panel hidden">${qaContent}</div>
</div>
`
// [End] <> [Lower Section] => Creating Tab View --> Design Tab Container

colContent.appendChild(tabContainer)

// [Start] <> [Lower Section] => Creating Tab View --> Remove product-further-info & Extra (Reviews & productQA) Heading
const proFurInfo = document.querySelector('.product-further-info')
proFurInfo.parentNode.removeChild(proFurInfo)

const reviewsHeading = document.querySelector('#descriptionTab #reviews')
reviewsHeading.parentNode.removeChild(reviewsHeading)

const productQAHeading = document.querySelector('#descriptionTab #ask-and-answer')
productQAHeading.parentNode.removeChild(productQAHeading)
// [End] <> [Lower Section] => Creating Tab View --> Remove product-further-info & Extra (Reviews & productQA) Heading

// [Start] <> [Lower Section] => Creating Tab View --> Tab Handler Methods
const tabClick = ({ target }) => {
    const { dataset: { id = '' }} = target;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('selected'));
    target.classList.add('selected');
    document.querySelectorAll('.tab-panel').forEach(t => t.classList.add('hidden'));
    document.querySelector(`#${id}`).classList.remove('hidden');
};

const bindTabs = () => {
    document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', tabClick);
    })    
};

document.addEventListener('mouseover', () => {
    bindTabs();
});
// [End] <> [Lower Section] => Creating Tab View --> Tab Handler Methods
// [End] <> [Lower Section] => Creating Tab View

window.scrollTo(0, 0);
// [End] <> [Lower Section]

// [Start] <> [Additional Adjustment]
// [Upper Section] => {Right Part} --> Adjust In Stock - Order Within Part -> Adjust timer
const countdown = document.querySelector('.product-countdown-wrapper')
const d = new Date()
let day = d.getDay()
if (day == 5 || day == 6 || day == 0) countdown.classList.add('hidden')
// [End] <> [Additional Adjustment]

// [Start] <> Add Additional Style Sheet
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
.space-between-specs li { margin-bottom: .6vw }

/* [Start] => Right Arow */
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
/* [End] => Right Arow */

/* [Start] => Tab Css */
.tab-container { border: 2px solid black; }

.tab-button-container {
  display: flex;
  border-bottom: 1px solid gray;
  font-weight: 900;
}

.tab {
  flex: 1;
  display: inline-block;
  background-color: #ababab;
  padding: 0.75rem;
  color: #000;
  cursor: pointer;
  text-align: center;
}

div[data-id="reviewsTab"] {
  border-right: 1px solid black;
  border-left: 1px solid black;
}

.selected { background-color: #fff; }
    
.tab-panel { padding: 1rem; }

.hidden { display:none; }

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
/* [End] => Tab Css */

.productVideo, .amountOfReviews { padding: 5px; }

/* [Start] => Css Overwrite */
.multi-buy-tag:before {
  font-family: FontAwesome;
  border: 1px solid #ccc;
  border-radius: 50%;
  font-size: 14px;
  text-align: center;
  font-weight: 900;
  padding: 4px;
  background-color: #F4F4F4;
  background-image: none;
  content: "";
  color: #e42a15;
}

.product-detail .multi-buy .multi-buy-price { color: #e42a15; }

.panel-default { border: none }

#reviewsTab {
  padding: 2.5vw;
  padding-top: .5vw;
  padding-bottom: .5vw;
}

.review {
  border-bottom: 1px solid gray;
  list-style: none;
  padding: 1.5vw 0;
}

.no-border { border: none }

.reviewer .author { font-weight: 900; font-size: 1vw; }

.product-rating img { width: 6vw }

.product-images-carousel {
  transform: rotate(270deg);
  top: 12vw;
  left: -11vw;
  position: relative;
}

.product-images-carousel li { transform: rotate(90deg); }

.slick-prev { top: -3.4vw; left: 15vw; }

.slick-next { top: 18vw; left: 15vw; }

.slick-disabled { display: none !important; }

.slick-list { width: 4.5vw; }
/* [End] => Css Overwrite */

/* [Start] => Adjust Background Color */
.cd-main-content, #main-content, .breadcrumb {
  background-color: gray !important;
}

.product-basic-info, .product-further-info {
  background-color: #ffffff !important;
}

.row {
  margin-left: 0 !important;
  margin-right: 0 !important;    
  padding-top: 1vw;
  padding-right: 0.6vw;
}
/* [End] => Adjust Background Color */
`;
document.getElementsByTagName('head')[0].appendChild(style);
// [End] <> Add Additional Style Sheet
<script lang=ts>

	import CustomerSelectionButton from './components/CustomerSelectionButton.svelte'
	import InvoicePreview from './components/InvoicePreview.svelte'
	import CheckoutActions from './components/CheckoutActions.svelte';
  	import ProductSelection from './components/ProductSelection.svelte';
	import {Product} from './components/classes/classes';

	let productList:Array<Product> = [];
	let selectedProducts:Array<Product> = [];
  	let invoiceType:string;
  	let totalAmount = 0.0;
  	let selectedCustomer = {
    id: 1,
    name: "luis"
  }
  productList.push(new Product(1,12345,"caca blanca",10.50));
  
  // Event handler for adding a product to the selectedProducts array
  function addProductToCart() {
    getTotal();
    console.log(totalAmount);
  }

  function getTotal() {
    let total = 0.00;
    selectedProducts.forEach(product => {
   total = total + product.price ;
   totalAmount = total;
    })
  }
  // Event handler for deleting the last product from selectedProducts
  function deleteLastProduct() {
    if (selectedProducts.length > 0) {
      selectedProducts.pop();
    }
  }

  // Event handler for proceeding to invoice generation
  function proceedToInvoice() {
    // Implement your logic to generate an invoice
  }

  // Event handler for canceling the current invoice
  function cancelInvoice() {
    // Implement your logic to cancel the current invoice
  }

  // Event handler for deleting all selected products
  function deleteAllSelectedProducts() {
    selectedProducts = [];
  }
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<CustomerSelectionButton />
	
    <InvoicePreview 
    	bind:totalAmount={totalAmount}
    	bind:selectedCustomer={selectedCustomer}
    	bind:invoiceType={invoiceType}/>

    <CheckoutActions
    	on:deleteLastProduct={deleteLastProduct}
    	on:proceedToInvoice={proceedToInvoice}
    	on:cancelInvoice={cancelInvoice}
    	on:deleteAllSelectedProducts={deleteAllSelectedProducts}/>

    <ProductSelection 
    	bind:selectedProducts={selectedProducts}
    	bind:productList={productList}
    	on:addProductToCart={addProductToCart} 
		/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
 </style>

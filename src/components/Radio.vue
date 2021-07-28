<script setup>
	import { inject, computed } from 'vue';
	import { context } from './RadioGroup.vue';


	let state = inject(context);
	let props = defineProps(['value']);


	let selected = computed(() => state.selectedValue === props.value);
	let handleChange = () => state.selectedValue = props.value;
</script>

<template>
	<label class='form-check'>
		<input
			class='form-check-input'
			type='radio'
			:checked='selected'
			@click='handleChange'
		/>
		<span class='form-check-label'>
			<slot />
		</span>
	</label>
</template>

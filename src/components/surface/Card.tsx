import { computed, defineComponent, onMounted, PropType, reactive, ref, watch } from 'vue';

export default defineComponent({
	// name: 'card',
	props: {
		elevation: {
			type: String as PropType<'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>,
			default: 'lg',
		},
	},

	setup(props, { slots }) {
		const state = reactive({
			elevations: ['shadow-none', 'shadow-xs', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl'],
		});
		// const cardClasses=ref('')
		const cardClasses = computed(() => {
			let classes: string = "test ";
			console.log(classes)
			let index: number = state.elevations.findIndex(el => el.split('-')[1] === props.elevation);
			let hoveredElevation = state.elevations[index + 1];
			classes += ` shadow-${props.elevation} hover:shadow-${hoveredElevation}`;
			if (slots.mediaAside) {
				classes += ' flex items-center';
			}
			console.log("classes ", classes)
			return classes;
		});





		return () => (
			<div class={`card  min-w-sm border border-gray-100 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white    transition-shadow ${cardClasses.value}`}>
				{slots.header && <h2 class="text-md mb-2 px-4 pt-4 dark:text-white   ">{slots.header()}</h2>}
				{slots.media && <div class="w-full card__media">{slots.media()}</div>}
				{slots.mediaAside && <div class="  card__media--aside ">{slots.mediaAside()}</div>}
				{slots.default && <div class="flex items-center p-4 dark:text-white   ">{cardClasses} {slots.default()}</div>}
				{slots.footer && <div class="text-md pt-4 pb-4 px-4 dark:text-white   ">{slots.footer()}</div>}
			</div>
		);
	},
});

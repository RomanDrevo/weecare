import ApiGateway from "./api/ApiGateway";
// import env from "./env";
import env from "./env";
import CategoriesStore from "./stores/CategoriesStore";
import ProfessionalsStore from "./stores/ProfessionalsStore";
import CustomerStore from "./stores/CustomerStore";


const bootstrapper = () => {
    // const apiGateway = new ApiGateway('https://jsonplaceholder.typicode.com/');
    const apiGateway = new ApiGateway(env.API_URL);

    // model stores
    const categoriesStore = new CategoriesStore(apiGateway);
    const professionalsStore = new ProfessionalsStore(apiGateway);
    const customerStore = new CustomerStore(apiGateway);

    // ui states
    // const modalManagerUiState = new ModalManagerUiState();
    // const homeUiState = new HomeUiState({benefitsStore, promotionsStore});
    // const executionBenefitUiState = new ExecutionBenefitUiState();
    // const iDLoginUiStore = new IDLoginUiStore(authStore);
    // const passportLoginUiStore = new PassportLoginUiStore(authStore);
    // const searchUiState = new SearchUiState({searchedBenefitsStore});
    // const categoryBenefitsUiState = new CategoryBenefitsUiState({categoryBenefitsStore});
    // const idRegistrationUiState = new IDRegistrationUiState(apiGateway);
    // const passportRegistrationUiState = new PassportRegistrationUiState(apiGateway);
    // const contactUsUiStore = new ContactUsUiStore(apiGateway, modalManagerUiState, appUiState);
    // const personalUiState = new PersonalUiState(apiGateway);
    //
    // const bottomBarUiStore = new BottomBarUiStore();


    return {
        // modalManagerUiState,
        categoriesStore,
        professionalsStore,
        customerStore
        // faqStore,
        // homeUiState,
        // benefitsStore,
        // businessesStore,
        // promotionsStore,
        // singleBenefitStore,
        // creditCardTypesStore,
        // executionBenefitUiState,
        // myBenefitsStore,
        // singleBusinessStore,
        // contactUsUiStore,
        // iDLoginUiStore,
        // passportLoginUiStore,
        // myFavoriteStore,
        // searchedBenefitsStore,
        // categoryBenefitsStore,
        // categoryBenefitsUiState,
        // searchUiState,
        // authStore,
        // personalUiState,
        // appUiState,
        // bottomBarUiStore,
        // idRegistrationUiState,
        // passportRegistrationUiState,
        // videoAdsStore
    };
};

export default bootstrapper;

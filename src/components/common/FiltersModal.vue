<template>
  <modal name="filters-modal"
   :width="550"
   :height="550"
   @before-open="beforeOpen"
   @before-close="beforeClose"
  >

    <div class="row">
      <nav class="filters-modal-nav col-5">
        <ul class="nav flex-column filters-modal-ul" role="tablist">

          <li class="nav-item filters-modal-list filters-modal-header">
            <span @click="close"><i class="material-icons">arrow_back</i></span>
            <a class="nav-link" data-toggle="tab" href="#" role="tab" style="cursor:default">Opções Avançadas</a>
          </li>

          <ul class="filters-modal-body">
            <li class="nav-item filters-modal-list active">
              <a class="nav-link filters-modal-link" data-toggle="tab" href="#filtro1" role="tab">
                <p>Visualização</p>
                <p>Checkboxes</p>
              </a>
              <i class="material-icons filters-modal-arrows">keyboard_arrow_right</i>
            </li>

            <li class="nav-item filters-modal-list">
              <a class="nav-link filters-modal-link" data-toggle="tab" href="#filtro2" role="tab">
                <p>Diversos Itens</p>
                <p>Text Inputs</p>
              </a>
              <i class="material-icons filters-modal-arrows">keyboard_arrow_right</i>
            </li>

            <li class="nav-item filters-modal-list">
              <a class="nav-link filters-modal-link" data-toggle="tab" href="#filtro3" role="tab">
                <p>Mesa</p>
                <p>Radio Buttons</p>
              </a>
              <i class="material-icons filters-modal-arrows">keyboard_arrow_right</i>
            </li>

            <li class="nav-item filters-modal-list">
              <a class="nav-link filters-modal-link" data-toggle="tab" href="#filtro4" role="tab">
                <p>Filtro 04</p>
                <p>--</p>
              </a>
              <i class="material-icons filters-modal-arrows">keyboard_arrow_right</i>
            </li>

            <li class="nav-item filters-modal-list">
              <a class="nav-link filters-modal-link" data-toggle="tab" href="#filtro4" role="tab">
                <p>Filtro 05</p>
                <p>--</p>
              </a>
              <i class="material-icons filters-modal-arrows">keyboard_arrow_right</i>
            </li>

            <li class="nav-item filters-modal-list">
              <a class="nav-link filters-modal-link" data-toggle="tab" href="#filtro4" role="tab">
                <p>Filtro 06</p>
                <p>--</p>
              </a>
              <i class="material-icons filters-modal-arrows">keyboard_arrow_right</i>
            </li>

            <li class="nav-item filters-modal-list">
              <a class="nav-link filters-modal-link" data-toggle="tab" href="#filtro4" role="tab">
                <p>Filtro 07</p>
                <p>--</p>
              </a>
              <i class="material-icons filters-modal-arrows">keyboard_arrow_right</i>
            </li>

            <li class="nav-item filters-modal-list">
              <a class="nav-link filters-modal-link" data-toggle="tab" href="#filtro4" role="tab">
                <p>Filtro 08</p>
                <p>--</p>
              </a>
              <i class="material-icons filters-modal-arrows">keyboard_arrow_right</i>
            </li>

            <li class="nav-item filters-modal-list">
              <a class="nav-link filters-modal-link" data-toggle="tab" href="#filtro4" role="tab">
                <p>Filtro 09</p>
                <p>--</p>
              </a>
              <i class="material-icons filters-modal-arrows">keyboard_arrow_right</i>
            </li>

            <li class="nav-item filters-modal-list">
              <a class="nav-link filters-modal-link" data-toggle="tab" href="#filtro4" role="tab">
                <p>Filtro 10</p>
                <p>--</p>
              </a>
              <i class="material-icons filters-modal-arrows">keyboard_arrow_right</i>
            </li>

            <li class="nav-item filters-modal-list">
              <a class="nav-link filters-modal-link" data-toggle="tab" href="#filtro4" role="tab">
                <p>Filtro 11</p>
                <p>--</p>
              </a>
              <i class="material-icons filters-modal-arrows">keyboard_arrow_right</i>
            </li>

            <li class="nav-item filters-modal-list">
              <a class="nav-link filters-modal-link" data-toggle="tab" href="#filtro4" role="tab">
                <p>Filtro 12</p>
                <p>--</p>
              </a>
              <i class="material-icons filters-modal-arrows">keyboard_arrow_right</i>
            </li>

            <li class="nav-item filters-modal-list">
              <a class="nav-link filters-modal-link" data-toggle="tab" href="#filtro4" role="tab">
                <p>Filtro 13</p>
                <p>--</p>
              </a>
              <i class="material-icons filters-modal-arrows">keyboard_arrow_right</i>
            </li>
          </ul>
        </ul>
      </nav>

      <!-- Tab panes -->
      <div class="col-7 tab-content">
        <div class="tab-pane active" id="filtro1" role="tabpanel">

          <!-- header -->
          <div class="row tab-header-upper">
            <div class="col-6">6 selecionados</div>
            <div class="col-6 justify-content-end" style="">Limpar</div>
          </div>
          <div class="row form-group modal-text-input tab-header-lower" style="">
            <i class="material-icons input-icon filters-modal-input-icon">search</i>
            <input type="text" class="form-control" id="search" placeholder="Buscar">
          </div>

          <!-- content -->
          <div class="row filters-modal-tab-content">
            <div class="form-check tick-checkbox">
            <input type="checkbox" id="modal-filter-checkbox-1" name="modal-filter-checkbox-1" class="checkbox"/>
              <label for="modal-filter-checkbox-1">
              teste
              </label>
            </div>
            <div class="form-check tick-checkbox">
              <input type="checkbox" id="modal-filter-checkbox-2" name="modal-filter-checkbox-2" class="checkbox"/>
              <label for="modal-filter-checkbox-2">
              teste
              </label>
            </div>
            <div class="form-check tick-checkbox">
              <input type="checkbox" id="modal-filter-checkbox-3" name="modal-filter-checkbox-3" class="checkbox"/>
              <label for="modal-filter-checkbox-3">
              teste
              </label>
            </div>
            <div class="form-check tick-checkbox">
              <input type="checkbox" id="modal-filter-checkbox-4" name="modal-filter-checkbox-4" class="checkbox"/>
              <label for="modal-filter-checkbox-4">
              teste
              </label>
            </div>
            <div class="form-check tick-checkbox">
              <input type="checkbox" id="modal-filter-checkbox-5" name="modal-filter-checkbox-5" class="checkbox"/>
              <label for="modal-filter-checkbox-5">
              teste
              </label>
            </div>
            <div class="form-check tick-checkbox">
              <input type="checkbox" id="modal-filter-checkbox-6" name="modal-filter-checkbox-6" class="checkbox"/>
              <label for="modal-filter-checkbox-6">
              teste
              </label>
            </div>
          </div>
        </div>

        <div class="tab-pane" id="filtro2" role="tabpanel">

          <!-- header -->
          <div class="row tab-header-upper filters-modal-margin-top">
            <div class="col-6">Título vem aqui</div>
          </div>

          <!-- content -->
          <div class="row filters-modal-tab-content">
            <div class="form-check filters-modal-form-group">
              <div class="row form-group modal-text-input" style="">
                <label for="input-id-1">Label 1</label>
                <input type="text" class="form-control" id="input-id-1">
              </div>
              <div class="row form-group modal-text-input" style="">
                <label for="input-id-1">Label 2 with .warning class</label>
                <input type="text" class="form-control warning" id="input-id-2">
              </div>
            </div>
          </div>


          <div class="row tab-header-upper filters-modal-margin-top">
            <div class="col-6">Título vem aqui</div>
          </div>

          <!-- content -->
          <div class="row filters-modal-tab-content">
            <div class="form-check filters-modal-form-group">
              <div class="row form-group modal-text-input" style="">
                <label for="input-id-1">Label 3 with .danger class</label>
                <input type="text" class="form-control danger" id="input-id-3">
              </div>
              <div class="row form-group modal-text-input" style="">
                <label for="input-id-1">Label 4</label>
                <input type="text" class="form-control" id="input-id-4">
              </div>
            </div>
          </div>

        </div>




        <div class="tab-pane" id="filtro3" role="tabpanel">
          <!-- header -->
          <div class="row tab-header-upper">
            <div class="col-6">6 selecionados</div>
            <div class="col-6 justify-content-end" style="">Limpar</div>
          </div>
          <div class="row form-group modal-text-input tab-header-lower" style="">
            <i class="material-icons input-icon filters-modal-input-icon">search</i>
            <input type="text" class="form-control" id="search" placeholder="Buscar">
          </div>

          <!-- content -->
          <div class="row filters-modal-tab-content">
            <div class="form-check">
              <input type="radio" id="modal-filter-radio-1" name="modal-filter-radio" class="radio"/>
              <label for="modal-filter-radio-1">
              teste
              </label>

              <input type="radio" id="modal-filter-radio-2" name="modal-filter-radio" class="radio"/>
              <label for="modal-filter-radio-2">
              teste
              </label>

              <input type="radio" id="modal-filter-radio-3" name="modal-filter-radio" class="radio"/>
              <label for="modal-filter-radio-3">
              teste
              </label>

              <input type="radio" id="modal-filter-radio-4" name="modal-filter-radio" class="radio"/>
              <label for="modal-filter-radio-4">
              teste
              </label>

              <input type="radio" id="modal-filter-radio-5" name="modal-filter-radio" class="radio"/>
              <label for="modal-filter-radio-5">
              teste
              </label>

              <input type="radio" id="modal-filter-radio-6" name="modal-filter-radio" class="radio"/>
              <label for="modal-filter-radio-6">
              teste
              </label>
            </div>
          </div>
        </div>

        <div class="tab-pane" id="filtro4" role="tabpanel">4</div>
      </div>

      <!-- <div class="toast" style="position:abosolute;margin-top:0;text-transform:uppercase;z-index:9999;background-color:#CCC;width:300px;height:200px;color:#000">
        <p>salvo</p>
      </div> -->

    </div>


  </modal>
</template>

<script>

export default {
  name: 'FiltersModal',
  components: {
  },

  created () {
  },
  mounted () {
    // for (const A of document.querySelectorAll('*')) A.style.outline = `solid hsl(${(A + A).length * 9},99%,50%)1px`
  },
  methods: {
    close () {
      this.$modal.hide('filters-modal')
    },
    beforeOpen (event) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    },
    beforeClose (event) {
      document.getElementsByTagName('body')[0].style.overflow = 'scroll'
    }
    // sortBy: function (sortKey) {
    //   this.reverse = (this.sortKey === sortKey) ? !this.reverse : false
    //   this.sortKey = sortKey
    // }sortBy: function (sortKey) {
    //   this.reverse = (this.sortKey === sortKey) ? !this.reverse : false
    //   this.sortKey = sortKey
    // }
  },
  watch: {
  }
}
</script>

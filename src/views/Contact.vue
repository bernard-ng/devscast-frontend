<template>
<div class="contact">
  <!-- ===== SECTION ===== -->
  <section class="section-negative">
    <div class="container">

      <!-- ===== PAGE CONTENT ===== -->
      <div class="page-content mt-60">

        <!-- ===== PAGE TITLE & DESCRIPTION ===== -->
        <div class="row">
          <div class="col-md-8 col-md-offset-2 text-center">
            <h2 class="title-default mb-10">Get in touch</h2>
            <p class="page-description mb-70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores atque, officia molestias, vel nulla consectetur asperiores fugit quas voluptate eaque amet quasi id ipsum cupiditate, illo placeat distinctio optio aliquam.</p>
          </div>
        </div>

        <!-- ===== FORM CONTACT ===== -->
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <form action="php/contact.php" method="POST" id="form-contact" class="form-contact form-validate">
              <fieldset>
                <div class="mb-20">
                  <label for="name" class="label-control">Name* :</label>
                  <input type="text" name="name" class="form-control" id="name" required />
                </div>
                <div class="mb-20">
                  <label for="email" class="label-control">Email* :</label>
                  <input type="email" name="email" class="form-control" id="email" required />
                </div>
                <div class="mb-20">
                  <label for="subject" class="label-control">Subject* :</label>
                  <input type="text" name="subject" class="form-control" id="subject" required />
                </div>
                <div class="mb-20">
                  <label for="message" class="label-control">Message* :</label>
                  <textarea name="message" id="message" rows="6" class="form-control" required></textarea>
                </div>
                <div class="mb-20 text-right">
                  <input type="submit" class="btn btn-success btn-lg" value="Submit" />
                </div>
                <div class="form-callback success">
                  <p>Success! Thank you for contact us.</p>
                </div>
                <div class="form-callback error">
                  <p>Error! Something went wrong.</p>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ===== MAP EMBED ===== -->
  <div class="map" id="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6508936.152256409!2d-123.7672035544811!3d37.195681156014146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C+USA!5e0!3m2!1spt-BR!2sbr!4v1459617847784" style="border:0" allowfullscreen></iframe>
  </div>

  <!-- ===== DONATE ===== -->
  <section id="donate" class="section-highlight text-center">
    <div class="container">

      <!-- ===== SECTION TITLE ===== -->
      <h2 class="title-default">We need your help</h2>
      <p class="section-description">Help us support the show! Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />  Vel modi rem laudantium, alias minus temporibus nihil reiciendis vero.</p>

      <!-- ===== DONATE VALUES ===== -->
      <div class="row mb-50">

        <div class="col-lg-3 col-sm-6 mb-20">
          <a href="#" class="btn btn-default btn-round btn-lg btn-block">U$ 5</a>
        </div>

        <div class="col-lg-3 col-sm-6 mb-20">
          <a href="#" class="btn btn-default btn-round btn-lg btn-block">U$ 10</a>
        </div>

        <div class="col-lg-3 col-sm-6 mb-20">
          <a href="#" class="btn btn-default btn-round btn-lg btn-block">U$ 25</a>
        </div>

        <div class="col-lg-3 col-sm-6 mb-20">
          <a href="#" class="btn btn-default btn-round btn-lg btn-block">U$ 50</a>
        </div>

      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>
